import styled from 'styled-components';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';

export const StyledBtn=styled(Button)`

margin-left:10px;
`;
export const StyledHeader=styled.div`
      width: 80%;
          margin:20px auto;
          display: flex;
          justify-content: right;
h4{
       marginBottom: 0px;
            display: flex;
            align-items: center;
            flex-flow: column;
            margin-right: auto;
            font-size: 22px;
            font-weight: 800;
            font-family: sans;

}
p{
font-size: 10px; margin-bottom: 0px;
}

`;

export const StyledNav=styled.nav`

ul{
display:inline-flex;
    list-style:none;
    li{
        a{
        padding:5px 10px;
        margin:5px;
background: #1b6ca8;
color: white;
border-radius: 5px;
padding: 10px;
font-weight: 600;
        }
    }
    }
`
