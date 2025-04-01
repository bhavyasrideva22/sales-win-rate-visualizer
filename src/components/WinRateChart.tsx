
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, LabelList } from 'recharts';

interface WinRateChartProps {
  dealsWon: number;
  dealsLost: number;
}

export const WinRateChart = ({ dealsWon, dealsLost }: WinRateChartProps) => {
  const data = [
    {
      name: 'Won',
      deals: dealsWon,
      fill: '#7ac9a7',
    },
    {
      name: 'Lost',
      deals: dealsLost,
      fill: '#f87171',
    },
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 shadow-md rounded-md">
          <p className="font-medium">{`${payload[0].name} Deals: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
        <XAxis 
          dataKey="name" 
          axisLine={false}
          tickLine={false}
          tick={{ fill: '#333333', fontSize: 12 }}
        />
        <YAxis 
          axisLine={false}
          tickLine={false}
          tick={{ fill: '#333333', fontSize: 12 }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="deals" radius={[4, 4, 0, 0]}>
          <LabelList dataKey="deals" position="top" fill="#333333" fontSize={12} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
