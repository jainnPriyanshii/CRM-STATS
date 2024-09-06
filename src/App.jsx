import React, { useState } from 'react';
import TimeSelector from './components/TimeSelector';
import StatsCard from './components/StatsCard';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import BarChart from './components/BarChart';


const App = () => {
  const [timeWindow, setTimeWindow] = useState('1 Day');

  return (
    <div className="min-h-screen bg-teal-500">
      
      <header className="bg-green-100 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">CRM Stats</h1>
          <TimeSelector timeWindow={timeWindow} setTimeWindow={setTimeWindow} />
        </div>
      </header>

      
      <main className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       
        <StatsCard title="Total Sales" value="5,432" />
        <StatsCard title="New Customers" value="1,245" />
        <StatsCard title="Revenue" value="$45,000" />

        
        <LineChart timeWindow={timeWindow} />

        <PieChart/>
        <BarChart/>
      </main>
    </div>
  );
};

export default App;
