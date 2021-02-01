import React, { useState, useEffect, useContext } from 'react';
import { DateContext } from './DateContext';
import Program from './Program';
import Loader from './Loader';
import Alert from './Alert';

const ProgramsList = () => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(null);
  const [error, setError] = useState(null);

  const [date, setDate] = useContext(DateContext);

  useEffect(() => {
    setIsPending(true);
    setData(null);
    fetch('https://api-programacao-rpc.herokuapp.com/rpc/cronograma/' + date)
      .then((res) => {
        if (!res.ok) {
          throw Error('Could not fetch the data for that resource');
        }
        return res.json();
      })
      .then((data) => {
        setIsPending(false);
        setError(null);
        setData(data);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  }, [date]);

  return (
    <>
      <div className="accordion rounded bg-white p-3" id="accordionExample">
        {isPending && <Loader />}
        {!isPending && error && <Alert />}
        {data &&
          data.data.map((program) => (
            <Program
              key={program.media_id + program.title}
              media_id={program.media_id}
              logo={program.custom_info.Graficos.LogoURL}
              title={program.title}
              description={program.description}
              image={program.custom_info.Graficos.ImagemURL}
              duration={program.duration_in_minutes}
              category={program.program.category}
              start_time={program.start_time}
            />
          ))}
      </div>
    </>
  );
};

export default ProgramsList;
