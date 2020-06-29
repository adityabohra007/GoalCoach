import React from 'react';
import {StyledForm,StyledInput} from './styles'
import Select from 'react-select';

const Component=(props)=>{
    return(
        <div>
            <StyledForm>

        <h4>Add Goal</h4>
        <StyledInput>
        <label>Select User</label>
        <Select />
        </StyledInput>
            <StyledInput>
        <label>Goal Name</label>

        <input type="text" placeholder="Enter Goal Name" value={props.goal.name} onChange={props.onChangeName}/>
        </StyledInput>
         <StyledInput>
        <label>Goal Description</label>
        <input type="text" placeholder="Enter Goal Description" value={props.goal.description} onChange={props.onChangeDescription}/>
        </StyledInput>
        <StyledInput>
        <label>Schedule Time</label>
        <input type="date"  value={props.goal.scheduleDate} onChange={props.onChangeScheduleDate} />
        </StyledInput>

        <a onClick={props.onSave} >Add Goal</a>

        </StyledForm>
        </div>

    )

}
export default Component;
