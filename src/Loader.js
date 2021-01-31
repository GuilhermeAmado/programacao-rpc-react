import React from 'react';

const Loader = () => {
  return (
    <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="sr-only">Carregando...</span>
      </div>
    </div>
  );
};

export default Loader;
