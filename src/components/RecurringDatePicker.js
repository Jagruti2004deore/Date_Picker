// src/components/RecurringDatePicker.js
import React, { useState } from 'react';
import DaySelector from './DaySelector';

const RecurringDatePicker = () => {
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [recurrenceType, setRecurrenceType] = useState('daily');
  const [interval, setInterval] = useState(1);
  const [selectedDays, setSelectedDays] = useState([]);
  const [showSummary, setShowSummary] = useState(false);

  const handleDone = () => {
    setShowSummary(true);
  };

  const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  return (
    <div className="container mt-5 p-4 rounded shadow bg-white" style={{ maxWidth: '800px' }}>
      <h3 className="text-center fw-bold mb-4">Recurring Date Picker</h3>

      <div className="row mb-3">
        <div className="col-md-6">
          <label className="form-label fw-semibold">Start Date</label>
          <input
            type="date"
            className="form-control"
            value={dateRange.start || ''}
            onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label fw-semibold">End Date</label>
          <input
            type="date"
            className="form-control"
            value={dateRange.end || ''}
            onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-6">
          <label className="form-label fw-semibold">Recurrence Type</label>
          <select
            className="form-select"
            value={recurrenceType}
            onChange={(e) => setRecurrenceType(e.target.value)}
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weeks</option>
            <option value="weekly">Months</option>
            <option value="yearly">Years</option>
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label fw-semibold">Custom Recurrence Pattern</label>
          <input
            type="number"
            className="form-control"
            value={interval}
            min="1"
            onChange={(e) => setInterval(parseInt(e.target.value))}
          />
        </div>
      </div>

      {recurrenceType !== 'daily' && (
        <DaySelector selectedDays={selectedDays} setSelectedDays={setSelectedDays} />
      )}

      <div className="d-grid mt-4">
        <button className="btn btn-primary btn-lg" onClick={handleDone}>
          Done
        </button>
      </div>

      {showSummary && (
        <div className="alert alert-info mt-4">
          <h6 className="fw-bold mb-2">Summary:</h6>
          <p className="mb-1">
            From <strong>{new Date(dateRange.start).toDateString()}</strong> to{' '}
            <strong>{new Date(dateRange.end).toDateString()}</strong>
          </p>
          <p className="mb-1">
            Repeats: <strong>every {interval} {recurrenceType}()</strong>
          </p>
          {selectedDays.length > 0 && (
            <p className="mb-0">
              On: <strong>{selectedDays.map((d) => capitalize(d)).join(', ')}</strong>
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default RecurringDatePicker;
