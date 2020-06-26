import React from 'react';
import Wrapper from './Wrapper';
import  { FirebaseContext } from '../Firebase';

const GoalAdd=()=>{



    return(
        <FirebaseContext.Consumer>
        {firebase=><Wrapper  {...props} firebase={firebase}/>}
        </FirebaseContext.Consumer>

    )
}



export default GoalAdd;
