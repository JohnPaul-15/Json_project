// components/StatsChart.tsx
'use client';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export function StatsChart({ users, posts, comments }: { 
  users: number; 
  posts: number; 
  comments: number 
}) {
  const options = {
    chart: { id: 'stats-chart' },
    labels: ['Users', 'Posts', 'Comments'],
    colors: ['#3B82F6', '#10B981', '#F59E0B']
  };

  const series = [users, posts, comments];

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <Chart 
        options={options} 
        series={series} 
        type="donut" 
        height={350} 
      />
    </div>
  );
}