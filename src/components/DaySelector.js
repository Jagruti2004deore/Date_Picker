// src/components/DaySelector.js
import React from 'react';

const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

const DaySelector = ({ selectedDays, setSelectedDays }) => {
  const toggleDay = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  return (
    <div className="mb-4">
      <label className="form-label fw-semibold">Choose Weekdays</label>
      <div className="d-flex flex-wrap gap-2">
        {daysOfWeek.map((day) => (
          <button
            type="button"
            key={day}
            className={`btn btn-sm ${
              selectedDays.includes(day) ? 'btn-success' : 'btn-outline-secondary'
            }`}
            onClick={() => toggleDay(day)}
          >
            {day.charAt(0).toUpperCase() + day.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DaySelector;
