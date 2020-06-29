import React,{useEffect,useState} from 'react';
import Component from './Component';
const Wrapper=(props)=>{

    const [goalData,setGoalData]=useState({name:"",description:"",scheduleDate:""});

    const handleChangeName=(event)=>{
        var temp=goalData
        temp.name=event.target.value
        setGoalData(prev=>Object.assign({...prev},))

    }
    const handleChangeDescription=(event)=>{
        var temp=goalData
        temp.description=event.target.value

        setGoalData(temp)

    }
    const handleChangeScheduleDate=(event)=>{
        var temp=goalData
        temp.scheduleDate=event.target.value
        setGoalData(temp)
    }
    const handleOnSave=(event)=>{
        console.log("save")
    }
return(

<Component {...props}
    onChangeScheduleDate={handleChangeScheduleDate}
    onChangeDescription={handleChangeDescription}
    onChangeName = {handleChangeName}
    goal={goalData}
    onSave={handleOnSave}
    />
)
}


export default Wrapper;
