
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface BudgetVisualizationProps {
  isSeniorMode: boolean;
}

const budgetData = [
  { name: 'Education', value: 35, amount: 3500000000, color: '#00875A' },
  { name: 'Infrastructure', value: 25, amount: 2500000000, color: '#FFB800' },
  { name: 'Healthcare', value: 20, amount: 2000000000, color: '#3B82F6' },
  { name: 'Social Services', value: 15, amount: 1500000000, color: '#8B5CF6' },
  { name: 'Administrative', value: 5, amount: 500000000, color: '#6B7280' },
];

const chartConfig = {
  education: { label: 'Education', color: '#00875A' },
  infrastructure: { label: 'Infrastructure', color: '#FFB800' },
  healthcare: { label: 'Healthcare', color: '#3B82F6' },
  socialServices: { label: 'Social Services', color: '#8B5CF6' },
  administrative: { label: 'Administrative', color: '#6B7280' },
};

const BudgetVisualization: React.FC<BudgetVisualizationProps> = ({ isSeniorMode }) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className={`font-semibold ${isSeniorMode ? 'text-lg' : 'text-base'}`}>{data.name}</p>
          <p className={`text-gray-600 ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
            {data.value}% - {formatCurrency(data.amount)}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gov-neutrals-gray200">
      <div className="flex justify-between items-center mb-6">
        <h3 className={`font-semibold text-gov-neutrals-gray900 ${isSeniorMode ? 'text-2xl' : 'text-xl'}`}>
          2025 Budget Allocation by Sector
        </h3>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-1" /> CSV
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-1" /> PDF
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Pie Chart */}
        <div className="space-y-4">
          <h4 className={`font-medium text-gov-neutrals-gray800 ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>
            Budget Distribution
          </h4>
          <ChartContainer config={chartConfig} className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={budgetData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                  labelLine={false}
                >
                  {budgetData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <ChartTooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>

        {/* Bar Chart */}
        <div className="space-y-4">
          <h4 className={`font-medium text-gov-neutrals-gray800 ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>
            Budget Amount by Sector
          </h4>
          <ChartContainer config={chartConfig} className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={budgetData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="name" 
                  angle={-45}
                  textAnchor="end"
                  height={80}
                  fontSize={isSeniorMode ? 14 : 12}
                />
                <YAxis 
                  tickFormatter={(value) => `₱${(value / 1000000000).toFixed(1)}B`}
                  fontSize={isSeniorMode ? 14 : 12}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="amount" fill="#00875A">
                  {budgetData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </div>
      
      {/* Legend and Details */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {budgetData.map((item) => (
          <div key={item.name} className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center mb-2">
              <div 
                className="w-4 h-4 rounded-full mr-2" 
                style={{ backgroundColor: item.color }}
              ></div>
              <span className={`font-medium ${isSeniorMode ? 'text-base' : 'text-sm'}`}>
                {item.name}
              </span>
            </div>
            <span className={`text-gray-600 font-semibold ${isSeniorMode ? 'text-lg' : 'text-base'}`}>
              {item.value}%
            </span>
            <span className={`text-gray-500 ${isSeniorMode ? 'text-base' : 'text-xs'}`}>
              {formatCurrency(item.amount)}
            </span>
          </div>
        ))}
      </div>
      
      {/* Total Budget Summary */}
      <div className="mt-6 p-4 bg-gov-green-50 rounded-lg">
        <div className="text-center">
          <h4 className={`font-semibold text-gov-green-800 ${isSeniorMode ? 'text-xl' : 'text-lg'}`}>
            Total City Budget 2025
          </h4>
          <p className={`text-gov-green-700 font-bold ${isSeniorMode ? 'text-2xl' : 'text-xl'}`}>
            {formatCurrency(budgetData.reduce((sum, item) => sum + item.amount, 0))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BudgetVisualization;
