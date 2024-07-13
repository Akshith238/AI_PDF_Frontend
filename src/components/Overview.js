import React, { useState } from 'react';
import { Fab, Tooltip, Typography, Card, CardContent } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Doughnut, Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Overview = ({ setSelectedItem }) => {
  const macros = [
    { efficiency: 'High', errors: 1 },
    { efficiency: 'Low', errors: 5 },
    { efficiency: 'High', errors: 0 },
    { efficiency: 'Low', errors: 4 },
    { efficiency: 'High', errors: 1 },
    { efficiency: 'Low', errors: 3 },
    { efficiency: 'High', errors: 2 },
    { efficiency: 'Low', errors: 5 },
  ];

  const totalMacros = macros.length;
  const inefficientMacros = macros.filter(macro => macro.efficiency === 'Low').length;
  const optimizedMacros = macros.filter(macro => macro.efficiency === 'High').length;

  const doughnutData = {
    labels: ['Inefficient Macros', 'Optimized Macros'],
    datasets: [{
      data: [inefficientMacros, optimizedMacros],
      backgroundColor: ['#ff6384', '#36a2eb'],
    }]
  };

  const trendData = {
    labels: macros.map((macro, index) => `Macro ${index + 1}`),
    datasets: [
      {
        label: 'Efficiency Rate',
        data: macros.map(macro => macro.efficiency === 'High' ? 1 : 0),
        fill: false,
        borderColor: '#36a2eb'
      },
      {
        label: 'Error Rate',
        data: macros.map(macro => macro.errors),
        fill: false,
        borderColor: '#ff6384'
      }
    ]
  };

  return (
    <div className="p-6 space-y-6 font-poppins h-screen bg-gray-100">
      <Typography variant="h4" component="h1" className="font-bold font-poppins text-slate-900">
        Macro Overview
      </Typography>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Macros */}
        <Card className="border-l-4 border-blue-500 shadow-lg">
          <CardContent>
            <Typography variant="h6" component="h2" className="font-bold font-poppins text-gray-800">
              Total Macros
            </Typography>
            <Typography variant="h4" component="p" className="font-poppins text-blue-500">
              {totalMacros}
            </Typography>
          </CardContent>
        </Card>

        {/* Inefficient Macros */}
        <Card className="border-l-4 border-red-500 shadow-lg">
          <CardContent>
            <Typography variant="h6" component="h2" className="font-bold font-poppins text-gray-800">
              Inefficient Macros
            </Typography>
            <Typography variant="h4" component="p" className="font-poppins text-red-500">
              {inefficientMacros}
            </Typography>
          </CardContent>
        </Card>

        {/* Optimized Macros */}
        <Card className="border-l-4 border-green-500 shadow-lg">
          <CardContent>
            <Typography variant="h6" component="h2" className="font-poppins font-bold text-gray-800">
              Optimized Macros
            </Typography>
            <Typography variant="h4" component="p" className="font-poppins text-green-500">
              {optimizedMacros}
            </Typography>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col md:flex-row w-full h-[400px] gap-6">
        {/* Doughnut Chart */}
        <Card className="flex-1 shadow-lg">
          <CardContent className="flex justify-center items-center">
            <Typography variant="h6" component="h2" className="font-poppins font-bold text-gray-800 mb-4">
              Macro Efficiency
            </Typography>
            <div className="w-full h-[300px]">
              <Doughnut data={doughnutData} />
            </div>
          </CardContent>
        </Card>

        {/* Trend Graph */}
        <Card className="flex-1 shadow-lg">
          <CardContent>
            <Typography variant="h6" component="h2" className="font-poppins font-bold text-gray-800 mb-4">
              Macro Trend
            </Typography>
            <div className="w-full h-[300px]">
              <Line data={trendData} />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Floating action button for starting new macro report */}
      <Tooltip
        title="Start Macro Report"
        arrow
      >
        <Fab
          onClick={() => setSelectedItem('Inspect')}
          aria-label="add"
          className="fixed bottom-6 bg-slate-900 right-6"
        >
          <AddIcon className='text-white'/>
        </Fab>
      </Tooltip>
    </div>
  );
}

export default Overview;
