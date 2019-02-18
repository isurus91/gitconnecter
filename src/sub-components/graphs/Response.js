import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import axios from 'axios';

// const data = [
//   { name: 'Page A', uv: 4000, pv: 2400, uvq: 4000, amt: 2400 },
//   { name: 'Page B', uv: 3000, pv: 1398,  uvq: 4000,amt: 2210 },
//   { name: 'Page C', uv: 2000, pv: 9800, uvq: 4000, amt: 2290 },
//   { name: 'Page D', uv: 2780, pv: 3908,  uvq: 4000,amt: 2000 },
//   { name: 'Page E', uv: 1890, pv: 4800,  uvq: 4000,amt: 2181 },
//   { name: 'Page F', uv: 2390, pv: 3800,  uvq: 4000,amt: 2500 },
//   { name: 'Page G', uv: 3490, pv: 4300,  uvq: 4000,amt: 2100 },
// ];

class Response extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      data02: []
    }
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
}

  render() {
    return ( 
      <LineChart width={550} height={160} data={this.state.data02}
      margin={{ top: 5, right: 30, left: -10, bottom: 10 }}>
      {/* <XAxis dataKey="epochTime" /> */}
      <YAxis/>
      <Tooltip/>
      <Line type="monotone" dataKey="errorRatio" stroke="#8884d8" activeDot={{r: 8}}/>
      
     </LineChart>
    )
  }
}

export default Response;