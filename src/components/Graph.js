import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Graph = ({ data, index }) => {
  const chartData = [];
  if (data) {
    for (let key in data) {
      chartData.push({
        name: key,
        data: [
          Math.round(data[key] * 100) / 100 / 4,
          Math.round(data[key] * 100) / 100 / 3,
          Math.round(data[key] * 100) / 100 / 2,
          Math.round(data[key] * 100) / 100
        ]
      });
    }
  }
  console.log(chartData);
  const options = {
    chart: {
      type: 'area'
    },
    title: {
      text: 'Sentimental Values specific to this article'
    },
    xAxis: {
      categories: []
    },
    credits: {
      enabled: false
    },
    series: chartData
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default Graph;
