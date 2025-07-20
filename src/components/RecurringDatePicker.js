import React, { useState } from 'react';
import DateRangePicker from './DateRangePicker';
import RecurrenceTypeSelector from './RecurrenceTypeSelector';
import DaySelector from './DaySelector';
import SummaryDisplay from './SummaryDisplay';

const RecurringDatePicker = () => {
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [recurrenceType, setRecurrenceType] = useState('daily');
  const [interval, setInterval] = useState(1);
  const [selectedDays, setSelectedDays] = useState([]);
  const [showSummary, setShowSummary] = useState(false);

  const handleDone = () => {
    setShowSummary(true);
  };

  return (
    <div className="container mt-5 p-4 rounded shadow bg-white" style={{ maxWidth: '800px' }}>
      <h3 className="text-center fw-bold mb-4">Recurring Date Picker!!</h3>

      <DateRangePicker dateRange={dateRange} setDateRange={setDateRange} />
      <RecurrenceTypeSelector
        recurrenceType={recurrenceType}
        setRecurrenceType={setRecurrenceType}
        interval={interval}
        setInterval={setInterval}
      />
      {recurrenceType !== 'daily' && (
        <DaySelector selectedDays={selectedDays} setSelectedDays={setSelectedDays} />
      )}

      <div className="d-grid mt-4">
        <button className="btn btn-primary btn-lg" onClick={handleDone}>
          Done
        </button>
      </div>

      {showSummary && (
        <SummaryDisplay
          dateRange={dateRange}
          recurrenceType={recurrenceType}
          interval={interval}
          selectedDays={selectedDays}
        />
      )}
    </div>
  );
};

export default RecurringDatePicker;
