import React from 'react';
import Loader from './Loader';
import Program from './Program';

const ProgramsList = () => {
  return (
    <div class="accordion" id="accordionExample">
      <Program />
      <Program />
      <Program />
    </div>
  );
};

export default ProgramsList;
