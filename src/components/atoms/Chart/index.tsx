import { FC } from 'react';
import ReactApexChart from 'react-apexcharts';
import { GRAPH_TYPE } from 'src/utils/enums';
import { getChartOptions } from 'src/utils/helper';

const data = {
  series: [
    {
      name: 'series1',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ],
};

interface ChartProps {
  type: GRAPH_TYPE;
}

const Chart: FC<ChartProps> = ({ type }) => {
  return <ReactApexChart type="area" options={getChartOptions(type)} series={data.series} />;
};

export default Chart;
