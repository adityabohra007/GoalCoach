import React from 'react';
import {
  Link
} from "react-router-dom";
import {StyledHeader,StyledBtn} from './styles.js'


const Component=(props)=>{
    var btnStyle={margin:"auto 5px"}

    return(
<StyledHeader>
        <h4>
          Goal Coach{' '}
          <p>Get Trained</p>{' '}
        </h4>
        <div style={{display:"flex"}}>
        <Link color="primary" variant="contained" disableElevation style={btnStyle}>
          Report
        </Link>

        <Link color="primary" variant="contained" disableElevation style={btnStyle}>
          Goal Update
        </Link>
        </div>
      </StyledHeader>



    )

}
export default Component;
