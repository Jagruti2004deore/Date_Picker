import React from 'react';

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const SummaryDisplay = ({ dateRange, recurrenceType, interval, selectedDays }) => (
  <div className="alert alert-info mt-4">
    <h6 className="fw-bold mb-2">Summary:</h6>
    <p className="mb-1">
      From <strong>{new Date(dateRange.start).toDateString()}</strong> to{' '}
      <strong>{new Date(dateRange.end).toDateString()}</strong>
    </p>
    <p className="mb-1">
      Repeats: <strong>every {interval} {recurrenceType}</strong>
    </p>
    {selectedDays.length > 0 && (
      <p className="mb-0">
        On: <strong>{selectedDays.map((d) => capitalize(d)).join(', ')}</strong>
      </p>
    )}
  </div>
);

export default SummaryDisplay;
