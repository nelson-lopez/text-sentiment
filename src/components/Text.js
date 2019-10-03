import React, { useMemo } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Text = ({ title, body, link, image, date, author, data }) => {
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

  if (title) {
    return (
      <div className="text-container">
        <h3 className="article-title">{title}</h3>
        <h4 className="article-author">{author}</h4>
        <h4 className="article-date">{date.slice(0, 10)}</h4>
        <div className="content-container">
          <div className="image-div">
            <img src={image} alt="news" className="ui fluid image"></img>
          </div>
          <div className="ui segment">
            <p>{body}</p>
          </div>
        </div>
        <HighchartsReact highcharts={Highcharts} options={options} />;
        <a href={link} className=" ui inverted primary button">
          Article
        </a>
      </div>
    );
  }
};

export default Text;
