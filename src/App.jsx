import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
//import MenuIcon from '@material-ui/icons/Menu';
import DATA from './hierarchical_combined.json'




ChartJS.register(ArcElement, Tooltip, Legend);

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '40px',
  },
  chartContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
  },
  header: {
    backgroundColor: '#333',  // dark background
    color: '#fff',  // white text
    padding: '10px 0',
    textAlign: 'center',
    fontSize: '24px',
    marginBottom: '40px',  // space between the header and the charts
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.2)'  // subtle shadow for depth
  }
};

const PieChartComponent = ({ title, data }) => (
  <div style={styles.chartContainer}>
    <h2>{title}</h2>
    <Pie data={data} />
  </div>
);


const App = () => {
  //show data on console
  const yearList = [2018, 2019, 2020, 2021, 2022];
  const dataMap = {};
  yearList.forEach(year => {
    for (let i=0; i<4; i++) {
      let key = year + '_' + 'Q' +  (i+1); 
      let currentFileName = (i + 1) + '.json';
      dataMap[key] = DATA.transaction.hover.country.india[year][currentFileName];
      console.log(key, currentFileName, dataMap[key]);
    }
  });  
  let labels = [];
  let pieChartData = [];

  console.log(dataMap);
  Object.values(dataMap).forEach(currentData => {
    let currentLabels = [];
    let currentPieChartData = [];

    currentData.data.hoverDataList.forEach(stateData => {
      currentLabels.push(stateData.name);
      currentPieChartData.push(stateData.metric[0].count);
    })

    labels.push(currentLabels);
    pieChartData.push(currentPieChartData);
  });


  console.log(labels, pieChartData);
  const totalPieChartsData = [];
  for (let i=0; i<labels.length; i++) {
    let data = {
      labels: labels[i],
      datasets: [
        {
          label: '# of Types',
          data: pieChartData[i],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };
    totalPieChartsData.push(data);
  }
 

  return (
    <div style={{ padding: '20px' }}>
    <div style={styles.header}>
      PhonePe Data Dashboard
    </div>
    <div style={styles.container}>
      <div> {totalPieChartsData.map(pd => <PieChartComponent title="Region Data" data={pd} /> ) } </div>
    </div>
  </div>
  
  );



  
 
 
  

 





};
 


export default App;





