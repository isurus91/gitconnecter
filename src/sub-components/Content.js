import React, { Component } from 'react';
import '../css/styles.css';
import axios from 'axios';
import TableData from './TableData';
import Navigation from './Navigation';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: [],
            time: new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'UTC'}).format(Date.now()),
        };
    };

    componentDidMount() {
        axios.get('http://www.mocky.io/v2/5c4fd8303300002b24c58527')
            .then(res => {
                console.log("tableData:",res.data.cluster);
                try {
                    this.setState({
                        tableData: res.data.cluster
                    });
                } catch (error) {
                    console.error(error)
                }
            })
            .catch((error) => {
                console.error(error)
            });
            console.log(this.state.time);

    }
    render() {
        return (
            <div>
                <Navigation tableData={this.state.tableData} />
                <TableData tableData={this.state.tableData} time={this.state.time} />
            </div>
        );
    }
}
export default App;
