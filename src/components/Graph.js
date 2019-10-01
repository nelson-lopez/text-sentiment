import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Graph = ({ data }) => {
  const chartData = [];
  if (data) {
    for (let key in data) {
      chartData.push({
        name: key,
        y: data[key]
      });
    }
  }
  console.log(chartData);
  const options = {
    borderColor: '#B72D2D',
    chart: {
      type: 'pie'
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
    series: [
      {
        data: chartData
      }
    ]
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default Graph;
