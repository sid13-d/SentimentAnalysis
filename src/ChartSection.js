import React, {useState} from 'react';
import {Bar,Pie, Line} from 'react-chartjs-2';
import Chart from 'chart.js/auto'
import {CategoryScale} from 'chart.js'; 
import './Chartsection.css';
Chart.register(CategoryScale);

export const Data = [
  {
    id: 1,
    year: 2016,
    userGain: 80000,
    userLost: 823
  },
  {
    id: 2,
    year: 2017,
    userGain: 45677,
    userLost: 345
  },
  {
    id: 3,
    year: 2018,
    userGain: 78888,
    userLost: 555
  },
  {
    id: 4,
    year: 2019,
    userGain: 90000,
    userLost: 4555
  },
  {
    id: 5,
    year: 2020,
    userGain: 4300,
    userLost: 234
  }
];


const ChartSection = () => {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year), 
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });
  return (
    <div className='container'>
      <h2>Charts Section</h2>
      <div className='graphs'>
      <div className='bar-graph'>
      <Bar
          data={chartData}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              
            }
          }}
        />
        </div>

        <div className='pie-graph'>
        <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020"
            }
          }
        }}
      />
        </div>

        <div className='line-graph'>
        <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020"
            },
            legend: {
              display: false
            }
          }
        }}
      />
        </div>
        </div>
    </div>
  );
}

export default ChartSection;