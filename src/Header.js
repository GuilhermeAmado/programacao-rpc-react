import React, { useState, useContext } from 'react';
import { DateContext } from './DateContext';

const Header = () => {
  const [date, setDate] = useContext(DateContext);
  return (
    <header>
      <h1 className="heading text-center mb-3">
        Programação RPC TV <small className="text-muted">para o dia</small>
        <input
          className="small datepicker bg-dark rounded text-white ml-3 px-2"
          type="date"
          name="date-picker"
          id="date-picker"
          onKeyDown={(e) => e.preventDefault()}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </h1>
    </header>
  );
};

export default Header;
