'use client';
import { useUsers } from '@/hooks/useUsers';
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function Charts() {
  const { data: users, loading, error } = useUsers();

  if (loading) return <div className="p-4">Loading chart data...</div>;
  if (error) return (
  <div className="p-4 text-red-500">
    Error: {error instanceof Error ? error.message : String(error)}
  </div>
);

  const chartOptions: ApexCharts.ApexOptions = {
    chart: { type: 'bar' },
    xaxis: { 
      categories: users.map(user => user.name),
      labels: { rotate: -45 }
    }
  };

  const chartSeries = [{
    name: 'User IDs',
    data: users.map(user => user.id)
  }];

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">User Statistics</h2>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="bar"
        height={350}
        width="100%"
      />
    </div>
  );
}