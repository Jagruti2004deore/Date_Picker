import React from 'react';

function RecurrenceOptions({ recurrence, setRecurrence }) {
  return (
    <div className="mb-3">
      <label className="form-label fw-bold">Recurrence Type</label>
      <select
        className="form-select"
        value={recurrence}
        onChange={(e) => setRecurrence(e.target.value)}
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
    </div>
  );
}

export default RecurrenceOptions;
