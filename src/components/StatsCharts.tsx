// components/StatsChart.tsx
'use client';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

type StatsChartProps = {
  users: number;
  posts: number;
  comments: number;
  chartType?: 'donut' | 'bar'; // Add chart type option
};

export function StatsChart({ users, posts, comments, chartType = 'donut' }: StatsChartProps) {
  // Shared options
  const baseOptions = {
    chart: {
      id: 'content-stats-chart',
      toolbar: { show: false }
    },
    colors: ['#3B82F6', '#10B981', '#F59E0B'], // blue, green, amber
    dataLabels: { enabled: true },
    legend: {
      position: 'bottom' as const,
      horizontalAlign: 'center' as const
    }
  };

  // Chart-specific configurations
  const chartOptions = {
    ...baseOptions,
    ...(chartType === 'donut' 
      ? {
          labels: ['Users', 'Posts', 'Comments'],
          plotOptions: {
            pie: {
              donut: {
                size: '65%'
              }
            }
          }
        }
      : {
          xaxis: {
            categories: ['Users', 'Posts', 'Comments'],
          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              columnWidth: '45%',
            }
          }
        })
  };

  const series = chartType === 'donut' 
    ? [users, posts, comments] 
    : [{ name: 'Count', data: [users, posts, comments] }];

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">
        {chartType === 'donut' ? 'Content Distribution' : 'Content Overview'}
      </h2>
      <Chart
        options={chartOptions}
        series={series}
        type={chartType}
        height={350}
      />
    </div>
  );
}