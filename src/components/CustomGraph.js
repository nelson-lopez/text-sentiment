import React, { useMemo } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const CustomGraph = ({ data }) => {
  const setChartData = useMemo(() => {
    const chartData = [];
    if (data) {
      for (let key in data) {
        chartData.push({
          name: key,
          y: data[key]
        });
      }
    }
    return chartData;
  }, [data]);

  const options = {
    borderColor: '#B72D2D',
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Sentimental Value'
    },
    xAxis: {
      categories: []
    },
    credits: {
      enabled: false
    },
    series: [
      {
        data: setChartData
      }
    ]
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default CustomGraph;
