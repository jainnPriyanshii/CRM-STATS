import React from 'react';

const StatsCard = ({ title, value }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
};

export default StatsCard;
