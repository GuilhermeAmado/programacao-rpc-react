import React from 'react';

const Program = () => {
  return (
    <div class="card">
      <div class="card-header" id="headingTwo">
        <h2 class="mb-0">
          <button
            class="btn btn-link collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            <span>
              <img
                class="rounded mr-3"
                src="https://s3.glbimg.com/v1/AUTH_947d0a0390ad47fbba7a4b93423e1004/Logo/5.jpg"
                alt=""
              />
            </span>
            <span class="badge badge-light border mr-3 p-2">04:00</span>
            Collapsible Group Item #2
          </button>
        </h2>
      </div>
      <div
        id="collapseTwo"
        class="collapse"
        aria-labelledby="headingTwo"
        data-parent="#accordionExample"
      >
        <div class="card-body">
          <div class="row">
            <div class="col-6">
              <p>
                Os assuntos mais importantes do Brasil e do mundo, com
                apresentação de Roberto Kovalick.
              </p>
              <hr />
              <p class="badge badge-light border mr-3 p-2">
                Categoria: Jornalismo
              </p>
              <p class="badge badge-light border mr-3 p-2">
                Duração: 60 minutos
              </p>
            </div>
            <div class="col-6">
              <img
                src="https://s3.glbimg.com/v1/AUTH_947d0a0390ad47fbba7a4b93423e1004/Imagem/6682.jpg"
                alt=""
                class="rounded img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
