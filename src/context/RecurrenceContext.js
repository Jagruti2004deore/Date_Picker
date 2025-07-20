import { createContext, useContext, useState } from 'react';

const RecurrenceContext = createContext();

export const RecurrenceProvider = ({ children }) => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [recurrenceType, setRecurrenceType] = useState('daily');
  const [interval, setInterval] = useState(1);
  const [selectedDays, setSelectedDays] = useState([]);
  const [showSummary, setShowSummary] = useState(false);

  return (
    <RecurrenceContext.Provider
      value={{
        dateRange,
        setDateRange,
        recurrenceType,
        setRecurrenceType,
        interval,
        setInterval,
        selectedDays,
        setSelectedDays,
        showSummary,
        setShowSummary,
      }}
    >
      {children}
    </RecurrenceContext.Provider>
  );
};

export const useRecurrence = () => useContext(RecurrenceContext);
