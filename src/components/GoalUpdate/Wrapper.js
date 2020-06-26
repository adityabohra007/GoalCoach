import React, {useEffect, useState} from 'react';
import Component from './Component';
const Wrapper = props => {
  const [selectedCustomerData, setSelectedCustomerData] = useState([]);
  const [fetchedCustomerData, setFetchedCustomerData] = useState([]);
  const [goalList, setGoalList] = useState([]);
  const [statusRawData, setStatusRawData] = useState([]);
  const handleCustomerChange = selectOption => {
    setSelectedCustomerData(selectOption);
    try {
      props.firebase.db
        .ref('/users')
        .orderByChild('id')
        .equalTo(selectOption.value)
        .on('value', function(snap) {
          setFetchedCustomerData(snap.val()[0]);
        });
    } catch {
      console.log('error');
    }
  };
  const statusExist = statusData => {
    var goal = goalList;
    statusData = Object.entries(statusData);
    console.info(statusData);
    statusData.forEach(data => {
      console.info(data);
      if (goalList.map(data => data.id).includes(data[1].goal_id)) {
        var newdata = goal.map(goaldata => {
          if (goaldata.id == data[1].goal_id) {
            Object.assign(goaldata, {
              completed: data[1].completed,
              on_date: data[1].on_date,
              path_id: data[0],
            });
          }
          return goaldata;
        });
        setGoalList(newdata);
      }
    });
  };
  const createStatus = () => {
    var today = new Date();
    goalList.forEach(data => {
      var newChildKey = props.firebase.db.ref('/status').push();

      var addData = {
        goal_id: data.id,
        on_date: today.toLocaleDateString(),
        completed: false,
      };
      newChildKey.set(addData);
    });
  };
  const statusFetch = () => {
    var today = new Date();
    props.firebase.db
      .ref('/status')
      .orderByChild('on_date')
      .equalTo(today.toLocaleDateString())
      .on('value', function(snap) {
        // snap.ref.update({completed:true})
        var updateData = [];
        var statusData = snap.val();
        if (statusData !== null) {
          setStatusRawData(snap.val());
          statusExist(statusData);
        } else {
          createStatus();
        }
      });
  };
  useEffect(() => {
    if (props.firebase && fetchedCustomerData.goals) {
      fetchedCustomerData.goals.map(function(id) {
        props.firebase.db
          .ref('/goals')
          .orderByChild('id')
          .equalTo(id)
          .on('value', function(snap) {
            var response = snap.val();
            var goalData = goalList;
            var filter = response.filter(data => data);
            goalData.push(...filter);
            setGoalList(goalData);
          });
      });
      statusFetch();
    }
  }, [fetchedCustomerData]);
  const handleCheckBoxOnChange = (event, path, on_date, goal_id) => {
    var value = false;
    if (event.target.checked) {
      value = true;
    }
    var tempgoal = goalList;
    tempgoal = tempgoal.map(data => {
      if (data.id === goal_id) {
        return {...data, completed: value};
      } else {
        return {...data};
      }
    });
    console.info(tempgoal, 'new data');
    setGoalList(tempgoal);
  };
  const handleOnSave = () => {
    console.info('saving data ');
    goalList.forEach(data => {
      props.firebase.db.ref('/status/' + data.path_id).set({
        completed: data.completed,
        on_date: data.on_date,
        goal_id: data.id,
      });
    });
  };
  return (
    <Component
      {...props}
      customerOnChange={handleCustomerChange}
      selectedCustomerData={selectedCustomerData}
      goalList={goalList}
      onChange={handleCheckBoxOnChange}
      onSave={handleOnSave}
    />
  );
};

export default Wrapper;
