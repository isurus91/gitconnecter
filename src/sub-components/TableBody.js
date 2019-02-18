import React, { Component } from 'react';
import DemoGraph from '../sub-components/graphs/demoGraph';
import CardView from '../sub-components/CardView';
import '../css/styles.css';

class TableBody extends Component {
    constructor(props) {
        super(props)
        this.state = {
        };

        this.getToggleDataTarget = this.getToggleDataTarget.bind(this);
        this.getToggleID = this.getToggleID.bind(this);
        this.getButtonType = this.getButtonType.bind(this);
        this.getRowColor = this.getRowColor.bind(this);
    }
    getToggleDataTarget(appName, clustername) {
        appName = appName.replace(/[^A-Z0-9]/ig, "")
        clustername = clustername.replace(/[^A-Z0-9]/ig, "")
        appName = "#".concat(appName).concat(clustername)
        return appName
    }
    getToggleID(appName, clustername) {
        appName = appName.replace(/[^A-Z0-9]/ig, "")
        clustername = clustername.replace(/[^A-Z0-9]/ig, "")
        appName = appName.concat(clustername)
        return appName
    }

    getButtonType(errorRatio) {
        var type;
        if (errorRatio * 100 < 35) {
            type = "btn btn-sm btn-success btn-circle"
        } else if (35 < errorRatio * 100 & errorRatio * 100 < 75) {
            type = "btn btn-sm btn-warning btn-circle"
        } else if (errorRatio * 100 >= 75) {
            type = "btn btn-sm btn-danger btn-circle"
        }
        return type
    }

    getRowColor(errorRatio) {
        var type;
        if (errorRatio * 100 >= 75) {
            type = "table-danger"
        }
        return type
    }
    createTable() {
        let table = []
        let item = this.props.data;
        // console.log('data : ', item)
        // console.log('item : ', item[0])

        for (let i = 0; i < item.length; i++) {
            // console.log('inner : ', i, ':', item[i]);
            // console.log('inner 1: ', i, ':', item[i].clusterName);
            for (let j = 0; j < item[i].cogniteServices.length; j++) {
                // console.log('inner 2 : ', i, ':', item[i]);
                // console.log('inner 3: ', j, ':', item[i].cogniteServices[j]);
                if (item[i].cogniteServices[j].name === 'default') {
                    item[i].cogniteServices[j].name = 'cognite-api'
                }


                table.push(
                    <tbody>
                        <tr className="clickable" data-toggle="collapse" aria-expanded="false" aria-controls="group-of-rows-1" data-target={this.getToggleDataTarget(item[i].cogniteServices[j].name, item[i].clusterName)} className="accordion-toggle"
                        // className={this.getRowColor(item[i].cluster[j].nameSpaceList[k].upPods,item[i].cluster[j].nameSpaceList[k].total)}
                        >
                            <td style={{'vertical-align':'middle'}}>{item[i].cogniteServices[j].name}</td>
                            {/* <td>{item[i].cluster[j].nameSpaceList[k].upPods}</td> */}
                            <td><button className={this.getButtonType(item[i].cogniteServices[j].errorRatio)}></button></td>
                            {/* <td>{((item[i].cluster[j].nameSpaceList[k].upPods)*100/(item[i].cluster[j].app[k].total)).toFixed(0)}%</td> */}
                            <td ><DemoGraph /></td>
                        </tr>

                        <tr>
                            <td colSpan='12'>
                                <div className="collapse" id={this.getToggleID(item[i].cogniteServices[j].name, item[i].clusterName)}>
                                    <CardView data={item[i].cogniteServices[j]} clust={item[i]} time={this.props.time}/>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                );
            }
        }
        return table
    }
    render() {
        return (
            this.createTable()
        );
    }
}

export default TableBody;