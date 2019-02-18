import React from 'react';
import Highcharts from 'highcharts';
import axios from 'axios';

const data=[  
  [  
     1548605037,
     0.0036967009676092404
  ],
  [  
     1548608637,
     0.002591721895702967
  ],
  [  
     1548612237,
     0.004155431277298963
  ],
  [  
     1548615837,
     0.004679523182954982
  ],
  [  
     1548619437,
     0.0035886040117946018
  ],
  [  
     1548623037,
     0.004295343191171468
  ],
  [  
     1548626637,
     0.006635855712765443
  ],
  [  
     1548630237,
     0.004517763574445802
  ],
  [  
     1548633837,
     0.014159360450739228
  ],
  [  
     1548637437,
     0.0018222884564150215
  ],
  [  
     1548641037,
     0.0010666296172701078
  ],
  [  
     1548644637,
     0.00890006065081107
  ],
  [  
     1548648237,
     0.0026151684064778828
  ],
  [  
     1548651837,
     0.0029708765246980314
  ],
  [  
     1548655437,
     0.0005102708225233306
  ],
  [  
     1548659037,
     0.0004949885836487001
  ],
  [  
     1548662637,
     0.0006625237195133796
  ],
  [  
     1548666237,
     0.0028311590009437206
  ],
  [  
     1548669837,
     0.00860293421139432
  ]
]
class Pie extends React.Component {
  
  
  highChartsRender() {
    Highcharts.chart({
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: 0,
          plotShadow: false,
          renderTo: 'atmospheric-composition'
      },
      title: {
          text: 'Up PODs',
          align: 'center',
          verticalAlign: 'middle',
          y: 40
      },
      plotOptions: {
          pie: {
              dataLabels: {
                  enabled: true,
                  distance: -50,
                  style: {
                      fontWeight: 'bold',
                      color: 'white'
                  }
              },
              startAngle: -90,
              endAngle: 90,
              center: ['50%', '75%'],
              size: '110%'
          }
      },
      series: [{
          type: 'pie',
          name: 'Browser share',
          innerSize: '50%',
          data: [
              ['Chrome', 58.9],
              ['Firefox', 13.29],
              ['Internet Explorer', 13],
              ['Edge', 3.78],
              ['Safari', 3.42],
              {
                  name: 'Other',
                  y: 7.61,
                  dataLabels: {
                      enabled: false
                  }
              }
          ]
      }]
  });
}

  componentDidMount() {
    axios.get('http://www.mocky.io/v2/5c4ede3f3100006814c41e71')
    .then(res => {
        console.log("getting response");
        try {
          this.setState({
            data02: res.data
          });
        } catch (error) {
            console.error(error)
        }
    })
    .catch((error) => {
        console.error(error)
    });
    this.highChartsRender();
  }

  render() {
    return (
      <div id="atmospheric-composition">
      </div>
    );
  }
}
export default Pie;