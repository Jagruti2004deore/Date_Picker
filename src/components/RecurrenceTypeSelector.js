import React from 'react';

const RecurrenceTypeSelector = ({ recurrenceType, setRecurrenceType, interval, setInterval }) => (
  <div className="row mb-3">
    <div className="col-md-6">
      <label className="form-label fw-semibold">Recurrence Type</label>
      <select
        className="form-select"
        value={recurrenceType}
        onChange={(e) => setRecurrenceType(e.target.value)}
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
    </div>
    <div className="col-md-6">
      <label className="form-label fw-semibold">Repeat Every</label>
      <input
        type="number"
        className="form-control"
        value={interval}
        min="1"
        onChange={(e) => setInterval(parseInt(e.target.value))}
      />
    </div>
  </div>
);

export default RecurrenceTypeSelector;
