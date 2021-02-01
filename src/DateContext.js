import React, { useState, createContext } from 'react';

export const DateContext = createContext();

export const DateProvider = (props) => {
  const today = new Date().toISOString().split('T')[0];
  const [date, setDate] = useState(today);

  return (
    <DateContext.Provider value={[date, setDate]}>
      {props.children}
    </DateContext.Provider>
  );
};
