import React from 'react';
import GoalItem from './../GoalItem';
import ModalElement from './../ModalElement';
const Component = props => {
  return (
    <>
      <GoalItem {...props} />
      <ModalElement />
    </>
  );
};
export default Component;
