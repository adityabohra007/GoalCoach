import React, {useEffect} from 'react';
import {StyleGoalItem, StyledTable, StyledTr, StyledBtn} from './styles.js';
import Box from '@material-ui/core/Box';
const Component = props => {
  const tablehead = (
    <thead>
      <tr>
        <th>Date</th>
        {props.goalData.map(data => (
          <th>{data.name}</th>
        ))}
      </tr>
    </thead>
  );

  const row = goal => {
    return (
      <StyledTr>
        <td>{goal.goal}</td>
        <td>Done</td>
        <td>Scheduled</td>
      </StyledTr>
    );
  };

  const statusCheck = date => {
    var list = props.goalStatus.map(data => {
      if (date == new Date(data.on_date).toDateString()) {
        var status = data.goal_compeleted ? (
          <td>Completed</td>
        ) : (
          <td>Skipped</td>
        );
        return status;
      } else {
      }
    });
    return list;
  };
  const allDates = () =>
    props.goalStatus.map(data => new Date(data.on_date).toDateString());

  var distinctDate = [];
  distinctDate = () => {
    var tempSet = new Set(allDates());
    var tempList = [];
    tempSet.forEach(data => {
      tempList.push(data);
    });
    return tempList;
  };
  var distinctDateRender;
  distinctDateRender = () =>
    distinctDate().map(date => {
      return (
        <StyledTr>
          <td>{date}</td>
          {statusCheck(date)}
        </StyledTr>
      );
    });

  useEffect(() => {}, []);
  var table = (
    <StyledTable>
      <table>
        {tablehead}
        <tbody>
          <tr></tr>
          {distinctDateRender()}
          <tr></tr>
        </tbody>
      </table>
    </StyledTable>
  );

  return (
    <>
      <div
        style={{
          width: '80%',
          margin: '20px auto',
          display: 'flex',
          justifyContent: 'right',
        }}>
        <h4
          style={{
            marginBottom: '0px',
            display: 'flex',
            alignItems: 'center',
            flexFlow: 'column',
            marginRight: 'auto',
            fontSize: '22px',
            fontWeight: '800',
            fontFamily: 'sans',
          }}>
          Goal Coach{' '}
          <p style={{fontSize: '10px', marginBottom: '0px'}}>Get Trained</p>{' '}
        </h4>
        <StyledBtn color="primary" variant="contained" disableElevation>
          Goal Update
        </StyledBtn>
      </div>
      {props.goalDataLoading ? (
        <p style={{textAlign: 'center', margin: '40px 10px 20px 10px'}}>
          Loading
        </p>
      ) : (
        table
      )}
    </>
  );
};
export default Component;
