// import React from 'react';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Pie } from 'react-chartjs-2';
// import { Bar } from 'react-chartjs-2';
// import DATA from './hierarchical_combined.json'
// import './App.css';
// import Dropdown from './Dropdown';
// import { useState } from 'react';

// ChartJS.register(ArcElement, Tooltip, Legend);

// const styles = {
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: '40px',
//   },
//   chartContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     gap: '20px',
//   },
//   header: {
//     backgroundColor: '#333',  // dark background
//     color: '#fff',  // white text
//     padding: '10px 0',
//     textAlign: 'center',
//     fontSize: '24px',
//     marginBottom: '40px',  // space between the header and the charts
//     fontFamily: 'Arial, sans-serif',
//     boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.2)'  // subtle shadow for depth
//   }
// };

// const PieChartComponent = ({ title, data }) => (
//   <div style={styles.chartContainer}>
//     <h2>{title}</h2>
//     <Pie data={data} />
//   </div>
// );


// const App = () => {
//   //show data on console
//   const yearList = [2018, 2019, 2020, 2021, 2022];
//   const [currentYear, setCurrentYear] = useState(2020);
//   const [currentQuarter, setCurrentQuarter] = useState(0);
//   const dataMap = {};
//   const finaldata= {};

//   yearList.forEach(year => {
//     if (year === currentYear){
//     for (let i=0; i<4; i++) {
//     if (i === currentQuarter ){

//       let key = year + '_' + 'Q' +  (i+1); 
//       let currentFileName = (i + 1) + '.json';
//       dataMap[key] = DATA.transaction.hover.country.india[year][currentFileName];
//       finaldata = dataMap[key]; 
//       console.log(key, currentFileName, dataMap[key]);
//     }
//   }
//   }
//   });  
//   let pcd = {
//     labels: 'a',
//     datasets: [
//       {
//         label: '# of Types',
//         data: finaldata,
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(255, 206, 86, 0.2)',
//           'rgba(75, 192, 192, 0.2)',
//           'rgba(153, 102, 255, 0.2)',
//           'rgba(255, 159, 64, 0.2)',
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//           'rgba(255, 159, 64, 1)',
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   let labels = [];
//   let pieChartData = [];

//   console.log(dataMap);
//   Object.values(dataMap).forEach(currentData => {
//     let currentLabels = [];
//     let currentPieChartData = [];

//     currentData.data.hoverDataList.forEach(stateData => {
//       currentLabels.push(stateData.name);
//       currentPieChartData.push(stateData.metric[0].count);
//     })

//     labels.push(currentLabels);
//     pieChartData.push(currentPieChartData);
//   });


//   console.log(labels, pieChartData);
//   const totalPieChartsData = [];
//   for (let i=0; i<labels.length; i++) {
//     let data = {
//       labels: labels[i],
//       datasets: [
//         {
//           label: '# of Types',
//           data: pieChartData[i],
//           backgroundColor: [
//             'rgba(255, 99, 132, 0.2)',
//             'rgba(54, 162, 235, 0.2)',
//             'rgba(255, 206, 86, 0.2)',
//             'rgba(75, 192, 192, 0.2)',
//             'rgba(153, 102, 255, 0.2)',
//             'rgba(255, 159, 64, 0.2)',
//           ],
//           borderColor: [
//             'rgba(255, 99, 132, 1)',
//             'rgba(54, 162, 235, 1)',
//             'rgba(255, 206, 86, 1)',
//             'rgba(75, 192, 192, 1)',
//             'rgba(153, 102, 255, 1)',
//             'rgba(255, 159, 64, 1)',
//           ],
//           borderWidth: 1,
//         },
//       ],
//     };
//     totalPieChartsData.push(data);
//   }
 
//   console.log(currentYear);

//   return (
//     <div style={{ padding: '20px' }}>
//       <div style={styles.header}>PhonePe Data Dashboard</div>
//       <Dropdown yearList={yearList} currentYear={currentYear} setCurrentYear={setCurrentYear} />
//       <div style={styles.container}>

//        <div> <PieChartComponent title="Region Data" data={pcd}/> </div>

      
//       </div>
      
//     </div>
//   );
  
// };
        




// ;
 


// export default App;


import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import DATA from './hierarchical_combined.json';
import './App.css';
import Dropdown from './Dropdown';

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
    
  // ... (same as before)
      }
};


const PieChartComponent = ({ title, data }) => (
  <div style={styles.chartContainer}>
    <h2>{title}</h2>
    <Pie data={data} />
  </div>
);

const App = () => {
  const yearList = [2018, 2019, 2020, 2021, 2022];
  const [currentYear, setCurrentYear] = useState(2020);
  const [currentQuarter, setCurrentQuarter] = useState(0);
  const [finalData, setFinalData] = useState(null);

  useEffect(() => {
    const key = `${currentYear}_Q${currentQuarter + 1}`;
    const currentFileName = `${currentQuarter + 1}.json`;
    const data = DATA.transaction.hover.country.india[currentYear][currentFileName];
    setFinalData(data);
  }, [currentYear, currentQuarter]);

  let labels = [];
  let pieChartData = [];

  if (finalData && finalData.data && finalData.data.hoverDataList) {
    finalData.data.hoverDataList.forEach(stateData => {
      labels.push(stateData.name);
      pieChartData.push(stateData.metric[0].count);
    });
  }

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: '# of Types',
        data: pieChartData,
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

  return (
    <div style={{ padding: '20px' }}>
      <div style={styles.header}>PhonePe Data Dashboard</div>
      <Dropdown yearList={yearList} currentYear={currentYear} setCurrentYear={setCurrentYear} />
      <div style={styles.container}>
        <PieChartComponent title="Region Data" data={chartData} />
      </div>
    </div>
  );
};

export default App;


