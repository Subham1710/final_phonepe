import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
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

  const yearList = [2018, 2019, 2020, 2021, 2022, 'state']
  yearList.forEach(year => console.log(year,DATA.transaction.hover.country.india[year]));

  const companies =
  {
    "success": true,
    "code": "SUCCESS",
    "data": {
      "from": 1514745000000,
      "to": 1522175400000,
      "transactionData": [
        {
          "name": "Recharge & bill payments",
          "paymentInstruments": [
            {
              "type": "TOTAL",
              "count": 72550406,
              "amount": 1.4472713558652578E10
            }
          ]
        },
        {
          "name": "Peer-to-peer payments",
          "paymentInstruments": [
            {
              "type": "TOTAL",
              "count": 46982705,
              "amount": 1.4724588354277402E11
            }
          ]
        },
        {
          "name": "Merchant payments",
          "paymentInstruments": [
            {
              "type": "TOTAL",
              "count": 5368669,
              "amount": 4.656678915140091E9
            },

          ]
        },
        {
          "name": "Financial Services",
          "paymentInstruments": [
            {
              "type": "TOTAL",
              "count": 3762820,
              "amount": 8.158531051000277E8
            }
          ]
        },
        {
          "name": "Others",
          "paymentInstruments": [
            {
              "type": "TOTAL",
              "count": 5761576,
              "amount": 4.643217301269438E9
            }
          ]
        }
      ]
    },
    "responseTimestamp": 1630346628866
  }

  let labels = [];
  let pieChartData = [];
  
  companies.data.transactionData.forEach(
    (val) => {
      labels.push(val.name);
      pieChartData.push(val.paymentInstruments[0].count);
    });


  console.log(labels, pieChartData);

  const data = {
    labels,
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

 


  // const companies1 = 
 
  //  {
  //    "success":true,"code":"SUCCESS","data":{"hoverDataList":[{"name":"puducherry","metric":[{"type":"TOTAL","count":104212,"amount":1.6582597136983618E8}]},{"name":"tamil nadu","metric":[{"type":"TOTAL","count":6726622,"amount":1.1261557697516891E10}]},{"name":"uttar pradesh","metric":[{"type":"TOTAL","count":12537805,"amount":1.3939970923223106E10}]},{"name":"madhya pradesh","metric":[{"type":"TOTAL","count":8025395,"amount":8.681603403446348E9}]},{"name":"andhra pradesh","metric":[{"type":"TOTAL","count":9039585,"amount":1.1996276391823706E10}]},{"name":"tripura","metric":[{"type":"TOTAL","count":148157,"amount":1.3797891453062224E8}]},{"name":"lakshadweep","metric":[{"type":"TOTAL","count":778,"amount":1928611.1808777403}]},{"name":"manipur","metric":[{"type":"TOTAL","count":84069,"amount":1.2804617393020926E8}]},{"name":"maharashtra","metric":[{"type":"TOTAL","count":16387034,"amount":2.1711613257725674E10}]},{"name":"dadra & nagar haveli & daman & diu","metric":[{"type":"TOTAL","count":148549,"amount":1.7565838410921687E8}]},{"name":"meghalaya","metric":[{"type":"TOTAL","count":49571,"amount":6.625025978990036E7}]},{"name":"andaman & nicobar islands","metric":[{"type":"TOTAL","count":6658,"amount":1.463176122198579E7}]},{"name":"haryana","metric":[{"type":"TOTAL","count":4480770,"amount":6.793511514660528E9}]},{"name":"rajasthan","metric":[{"type":"TOTAL","count":7591690,"amount":8.926293130726837E9}]},{"name":"ladakh","metric":[{"type":"TOTAL","count":6089,"amount":1.2532857771114783E7}]},{"name":"punjab","metric":[{"type":"TOTAL","count":1870433,"amount":2.780758224854389E9}]},{"name":"assam","metric":[{"type":"TOTAL","count":1056881,"amount":1.157804456212469E9}]},{"name":"jharkhand","metric":[{"type":"TOTAL","count":2178921,"amount":2.3741863899194E9}]},{"name":"odisha","metric":[{"type":"TOTAL","count":5809821,"amount":4.627632210887628E9}]},{"name":"bihar","metric":[{"type":"TOTAL","count":5824302,"amount":6.045758172017314E9}]},{"name":"kerala","metric":[{"type":"TOTAL","count":1771380,"amount":2.402674753100502E9}]},{"name":"karnataka","metric":[{"type":"TOTAL","count":12016899,"amount":1.9217895314012802E10}]},{"name":"chandigarh","metric":[{"type":"TOTAL","count":381895,"amount":6.134354208676233E8}]},{"name":"telangana","metric":[{"type":"TOTAL","count":8522766,"amount":1.3308204118542435E10}]},{"name":"himachal pradesh","metric":[{"type":"TOTAL","count":481918,"amount":6.287378063723404E8}]},{"name":"west bengal","metric":[{"type":"TOTAL","count":11710225,"amount":1.0625978552140453E10}]},{"name":"gujarat","metric":[{"type":"TOTAL","count":5948775,"amount":7.577982255034092E9}]},{"name":"sikkim","metric":[{"type":"TOTAL","count":44078,"amount":6.465093894036834E7}]},{"name":"nagaland","metric":[{"type":"TOTAL","count":42845,"amount":7.800589108612517E7}]},{"name":"mizoram","metric":[{"type":"TOTAL","count":18561,"amount":4.5227219975790836E7}]},{"name":"chhattisgarh","metric":[{"type":"TOTAL","count":1891514,"amount":2.1491555572367463E9}]},{"name":"jammu & kashmir","metric":[{"type":"TOTAL","count":941568,"amount":1.0053712392561305E9}]},{"name":"goa","metric":[{"type":"TOTAL","count":160897,"amount":3.0385674234308386E8}]},{"name":"arunachal pradesh","metric":[{"type":"TOTAL","count":45497,"amount":9.238733600940911E7}]},{"name":"delhi","metric":[{"type":"TOTAL","count":7122754,"amount":1.121150380691996E10}]},{"name":"uttarakhand","metric":[{"type":"TOTAL","count":1246685,"amount":1.5085453585238864E9}]}]},"responseTimestamp":1630502909426
  //   }

  // let lables1 = [];
  // let pieChartData1 = [];

  // companies1.data.hoverDataList.forEach(
  //   (val) => {
  //     lables1.push(val.name);
  //     pieChartData1.push(val.metric[0].count);
  //   });


  // console.log(lables1, pieChartData1);


  // const data1 = {
  //   lables1,
  //   datasets: [
  //     {
  //       label: '# of Types',
  //       data: pieChartData,
  //       backgroundColor: [
  //         'rgba(255, 99, 132, 0.2)',
  //         'rgba(54, 162, 235, 0.2)',
  //         'rgba(255, 206, 86, 0.2)',
  //         'rgba(75, 192, 192, 0.2)',
  //         'rgba(153, 102, 255, 0.2)',
  //         'rgba(255, 159, 64, 0.2)',
  //       ],
  //       borderColor: [
  //         'rgba(255, 99, 132, 1)',
  //         'rgba(54, 162, 235, 1)',
  //         'rgba(255, 206, 86, 1)',
  //         'rgba(75, 192, 192, 1)',
  //         'rgba(153, 102, 255, 1)',
  //         'rgba(255, 159, 64, 1)',
  //       ],
  //       borderWidth: 1,
  //     },
  //   ],
  // };


  // return (<Pie data1={data1}/>);


  const companies1 = {
    // ... (all your data here)


    "success":true,"code":"SUCCESS","data":{"hoverDataList":[{"name":"puducherry","metric":[{"type":"TOTAL","count":104212,"amount":1.6582597136983618E8}]},{"name":"tamil nadu","metric":[{"type":"TOTAL","count":6726622,"amount":1.1261557697516891E10}]},{"name":"uttar pradesh","metric":[{"type":"TOTAL","count":12537805,"amount":1.3939970923223106E10}]},{"name":"madhya pradesh","metric":[{"type":"TOTAL","count":8025395,"amount":8.681603403446348E9}]},{"name":"andhra pradesh","metric":[{"type":"TOTAL","count":9039585,"amount":1.1996276391823706E10}]},{"name":"tripura","metric":[{"type":"TOTAL","count":148157,"amount":1.3797891453062224E8}]},{"name":"lakshadweep","metric":[{"type":"TOTAL","count":778,"amount":1928611.1808777403}]},{"name":"manipur","metric":[{"type":"TOTAL","count":84069,"amount":1.2804617393020926E8}]},{"name":"maharashtra","metric":[{"type":"TOTAL","count":16387034,"amount":2.1711613257725674E10}]},{"name":"dadra & nagar haveli & daman & diu","metric":[{"type":"TOTAL","count":148549,"amount":1.7565838410921687E8}]},{"name":"meghalaya","metric":[{"type":"TOTAL","count":49571,"amount":6.625025978990036E7}]},{"name":"andaman & nicobar islands","metric":[{"type":"TOTAL","count":6658,"amount":1.463176122198579E7}]},{"name":"haryana","metric":[{"type":"TOTAL","count":4480770,"amount":6.793511514660528E9}]},{"name":"rajasthan","metric":[{"type":"TOTAL","count":7591690,"amount":8.926293130726837E9}]},{"name":"ladakh","metric":[{"type":"TOTAL","count":6089,"amount":1.2532857771114783E7}]},{"name":"punjab","metric":[{"type":"TOTAL","count":1870433,"amount":2.780758224854389E9}]},{"name":"assam","metric":[{"type":"TOTAL","count":1056881,"amount":1.157804456212469E9}]},{"name":"jharkhand","metric":[{"type":"TOTAL","count":2178921,"amount":2.3741863899194E9}]},{"name":"odisha","metric":[{"type":"TOTAL","count":5809821,"amount":4.627632210887628E9}]},{"name":"bihar","metric":[{"type":"TOTAL","count":5824302,"amount":6.045758172017314E9}]},{"name":"kerala","metric":[{"type":"TOTAL","count":1771380,"amount":2.402674753100502E9}]},{"name":"karnataka","metric":[{"type":"TOTAL","count":12016899,"amount":1.9217895314012802E10}]},{"name":"chandigarh","metric":[{"type":"TOTAL","count":381895,"amount":6.134354208676233E8}]},{"name":"telangana","metric":[{"type":"TOTAL","count":8522766,"amount":1.3308204118542435E10}]},{"name":"himachal pradesh","metric":[{"type":"TOTAL","count":481918,"amount":6.287378063723404E8}]},{"name":"west bengal","metric":[{"type":"TOTAL","count":11710225,"amount":1.0625978552140453E10}]},{"name":"gujarat","metric":[{"type":"TOTAL","count":5948775,"amount":7.577982255034092E9}]},{"name":"sikkim","metric":[{"type":"TOTAL","count":44078,"amount":6.465093894036834E7}]},{"name":"nagaland","metric":[{"type":"TOTAL","count":42845,"amount":7.800589108612517E7}]},{"name":"mizoram","metric":[{"type":"TOTAL","count":18561,"amount":4.5227219975790836E7}]},{"name":"chhattisgarh","metric":[{"type":"TOTAL","count":1891514,"amount":2.1491555572367463E9}]},{"name":"jammu & kashmir","metric":[{"type":"TOTAL","count":941568,"amount":1.0053712392561305E9}]},{"name":"goa","metric":[{"type":"TOTAL","count":160897,"amount":3.0385674234308386E8}]},{"name":"arunachal pradesh","metric":[{"type":"TOTAL","count":45497,"amount":9.238733600940911E7}]},{"name":"delhi","metric":[{"type":"TOTAL","count":7122754,"amount":1.121150380691996E10}]},{"name":"uttarakhand","metric":[{"type":"TOTAL","count":1246685,"amount":1.5085453585238864E9}]}]},"responseTimestamp":1630502909426
     
  };

  let labels1 = [];
  let pieChartData1 = [];

  companies1.data.hoverDataList.forEach(
    (val) => {
      labels1.push(val.name);
      pieChartData1.push(val.metric[0].count);
    }
  );

  const data1 = {
    labels: labels1, 
    datasets: [
      {
        label: '# of Types in Regions',
        data: pieChartData1,
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
    <div style={styles.header}>
      PhonePe Data Dashboard
    </div>
    <div style={styles.container}>
      <PieChartComponent title="Company Data" data={data} />
      <PieChartComponent title="Region Data" data={data1} />
    </div>
  </div>
  
  );



  
 
 
  

  // fetchAllFiles(pulse)
  //   .then(allData => {
  //       const combinedData = allData.flatMap(data => processJSONData(data));
  //       console.log(combinedData); 
  //       // Here, combinedData will have the processed data from all your JSON files.
  //   })
  //   .catch(error => console.error("There was an error:", error));






};
 


export default App;





