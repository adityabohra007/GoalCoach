import styled from 'styled-components';

export const StyledList = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 30px 20px;
  box-shadow: 2px 2px 2px 1px gray;
  border-radius: 12px;
  margin: 20px 10px;
  p,
  label {
    margin: 0px;
    text-align: center;
  }
  p.title {
    font-size: 14px;
    font-weight: 800;
  }
  p.value {
    font-size: 15px;
    font-weight: 200;
    font-family: sans;
  }
`;
export const StyledBtn = styled.a`
  padding: 10px 20px;
  background: #1b6ca8;
  border-radius: 5px;
  color: white !important;
  cursor: pointer;
  font-weight: 600;
`;
