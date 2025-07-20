import React from 'react';

const DateRangePicker = ({ dateRange, setDateRange }) => (
  <div className="row mb-3">
    <div className="col-md-6">
      <label className="form-label fw-semibold">Start Date</label>
      <input
        type="date"
        className="form-control"
        value={dateRange.start}
        onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
      />
    </div>
    <div className="col-md-6">
      <label className="form-label fw-semibold">End Date</label>
      <input
        type="date"
        className="form-control"
        value={dateRange.end}
        onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
      />
    </div>
  </div>
);

export default DateRangePicker;
