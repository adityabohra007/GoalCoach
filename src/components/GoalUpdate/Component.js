import React from 'react';
import {StyledList, StyledBtn} from './styles.js';
import Select from 'react-select';
var customerOption = [
  {label: 'Aditya Bohra', value: 1},
  {label: 'Demo', value: 2},
];

const Component = props => {
  var customerSelected = props.goalList.length ? (
    <DataList {...props} />
  ) : (
    <div style={{padding: '20px', textAlign: 'center'}}>
      <p>No Goals There to Complete</p>
    </div>
  );

  return (
    <div style={{width: '80%', margin: 'auto'}}>
      <div style={{display: 'flex', flexFlow: 'column', width: '400px'}}>
        <label>Select Customer Name</label>
        <Select options={customerOption} onChange={props.customerOnChange} />
      </div>
      {props.selectedCustomerData.value ? (
        customerSelected
      ) : (
        <div style={{padding: '20px', textAlign: 'center'}}>
          <p></p>
        </div>
      )}
    </div>
  );
};

const DataList = props => {
  return (
    <div>
      {props.goalList.map(goal => (
        <StyledList>
          <div>
            <p className={'title'}>Date</p>
            <p className={'value'}>{goal.on_date}</p>
          </div>
          <div>
            <p className={'title'}>Goal</p>
            <p className={'value'}>{goal.name}</p>
          </div>
          <div>
            <p className={'title'}>Goal Timing</p>
            <p className={'value'}>{goal.scheduledAt}</p>
          </div>
          <div style={{display: 'flex', flexFlow: 'column-reverse'}}>
            <label>Completed</label>
            {goal.completed ? (
              <input
                type="checkbox"
                name="completed"
                id="completed"
                checked
                onChange={event =>
                  props.onChange(event, goal.path_id, goal.on_date, goal.id)
                }
              />
            ) : (
              <input
                type="checkbox"
                name="completed"
                id="completed"
                onChange={event =>
                  props.onChange(event, goal.path_id, goal.on_date, goal.id)
                }
              />
            )}
          </div>
        </StyledList>
      ))}
      <div style={{textAlign: 'center'}}>
        <StyledBtn onClick={props.onSave}>Save</StyledBtn>
      </div>
    </div>
  );
};
export default Component;
