import React from 'react';
import getTime from './helpers/getTime';

const Program = ({
  media_id,
  logo,
  title,
  description,
  image,
  duration,
  category,
  start_time,
}) => {
  return (
    <div className="card rounded shadow">
      <div className="card-header" id={media_id}>
        <h2 className="mb-0">
          <button
            className="btn btn-block text-left text-decoration-none collapsed"
            type="button"
            data-toggle="collapse"
            data-target={'#collapse' + media_id}
            aria-expanded="false"
            aria-controls={'#collapse' + media_id}
          >
            <span>
              <img className="rounded mr-3" src={logo} alt="" />
            </span>
            <span className="badge badge-light border mr-3 p-2">
              {getTime(start_time)}
            </span>
            {title}
          </button>
        </h2>
      </div>

      <div
        id={'collapse' + media_id}
        className="collapse"
        aria-labelledby={media_id}
        data-parent="#accordionExample"
      >
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <p>{description}</p>
              <hr />
              <p className="badge badge-light border mr-3 p-2">
                Categoria: {category}
              </p>
              <p className="badge badge-light border mr-3 p-2">
                Duração: {duration} minutos
              </p>
            </div>
            <div className="col-6">
              <img src={image} alt="" className="rounded img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
