import React, { useMemo } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Graph = ({ data }) => {
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
        data: setChartData
      }
    ]
  };
  if (data) {
    return <HighchartsReact highcharts={Highcharts} options={options} />;
  } else
    return (
      <div className="ui segment">
        <div className="ui active  dimmer">
          <div className="ui text loader">Loading</div>
        </div>
        <p></p>
      </div>
    );
};

export default Graph;
