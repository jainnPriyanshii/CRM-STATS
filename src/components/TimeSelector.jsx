import React from 'react';

const TimeSelector = ({ timeWindow, setTimeWindow }) => {
  return (
    <select
      value={timeWindow}
      onChange={(e) => setTimeWindow(e.target.value)}
      className="border p-2 rounded"
    >
      <option value="1 Day">1 Day</option>
      <option value="1 Week">1 Week</option>
      <option value="1 Month">1 Month</option>
    </select>
  );
};

export default TimeSelector;
