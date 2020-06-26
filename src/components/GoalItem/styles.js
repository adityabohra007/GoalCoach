import styled from 'styled-components';
import Box from '@material-ui/core/Box';
export const StyledTable=styled.div`
width:80%;
margin:auto;
margin-top:20px;
margin-bottom:20px;
border-radius: 10px;
padding:10px;
background: #84a9ac;

background: #436f8a;

table{
width:100%;
cursor:pointer;
font-family:sans;
text-align:center;
thead{
    tr{
        th{
            padding:10px;
            width:100px;
            color: #9bdeac;
            }
    }
}
}
`;

export const StyledTr=styled.tr`
    ${props=>props.scheduled?'background:#a6dcef;':""}
    ${props=>props.pending?'background:#e2979c;background:#e7305b;':""}
    ${props=>props.completed?'background:#cff6cf;':""}
    td{
        padding:10px;
        color: #f7f5dd;
        font-weight: 600;
        ${props=>props.scheduled?"color:#436f8a;":""}
        ${props=>props.completed?"color:#436f8a;":""}
        }

`

export const StyleGoalItem=styled(Box)`
background: white;
display: flex;
width:500px;
border-radius: 10px;
margin: 10px auto;
background:#ddf3f5;
background:#e7dfd5;
background:white;
padding:20px;
border-left: 10px solid ;
border-left-color:#cff6cf;
border-left-color:#e7305b;
border-bottom-left-radius: 5px;
border-top-left-radius: 5px;
h4{
font-family: 'Poppins', sans-serif;
font-size:18px;
}
h4,p{
margin-bottom:0px;
}
div{
    padding:10px;
}
div.status{
    display: flex;
    align-items: center;
}
div.title{
display: flex;
    flex-direction: row;
    align-items: center;
    min-width: 200px;
    justify-content: center;
}
}
`


