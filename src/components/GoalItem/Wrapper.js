import React, {useEffect, useState} from 'react';
import Component from './Component';
const Wrapper = props => {
  const [goalData, setGoalData] = useState([]);
  const [goalDataLoading, setGoalDataLoading] = useState(false);
  const [goalStatus, setGoalStatus] = useState([]);
  const [userData, setUserData] = useState([]);

  const fetchGoal = () => {
    if (props.firebase) {
      try {
        props.firebase.db.ref('goals').on('value', snap => {
          setGoalData(snap.val());
        });
      } catch {
        console.log('error fetching data');
      }

      try {
        props.firebase.db.ref('status').on('value', snap => {
            var toList=Object.entries(snap.val())
            toList=toList.map(data=>data[1])
            console.log(toList)

          setGoalStatus(toList);
          setGoalDataLoading(false);
        });
      } catch {
        console.log('error');
      }
    }
  };

  useEffect(() => {
    setGoalDataLoading(true);
    fetchGoal();
  }, [props.firebase]);

  // useEffect(() => {
  //   if (props.firebase) {
  //     try {
  //       props.firebase.db.ref('users').on('value', snap => {
  //         setUserData(snap.val());
  //         console.log(snap.val());
  //       });
  //     } catch {
  //       console.log('Network Error');
  //     }
  //   }
  // }, [props.firebase]);
  return (
    <Component
      {...props}
      goalStatus={goalStatus}
      goalData={goalData}
      goalDataLoading={goalDataLoading}
    />
  );
};

export default Wrapper;
