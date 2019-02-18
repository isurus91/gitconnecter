import React, { Component } from 'react';
import ServicePef from './card-view/servicePerformance'
import InfDev from './card-view/infDev'
import InfDev2 from './card-view/InfDev2'
import ServicePef2 from './card-view/ServPef2'
import Map from '../sub-components/graphs/map'

class CardView extends Component {
  constructor(props) {
    super(props)
  }

  getToggleDataTarget(appName, clusterName) {
    var n = 0
    if (appName !== "") {
      n = n++
    }
    appName = appName.replace(/[^A-Z0-9]/ig, "")
    appName = "#".concat(appName).concat(n).concat(clusterName)
    return appName
  }
  getToggleID(appName, clusterName) {
    var n = 0
    if (appName !== "") {
      n = n++
    }
    appName = appName.replace(/[^A-Z0-9]/ig, "")
    appName = appName.concat(n).concat(clusterName)
    return appName
  }


  getToggleID2(appName, clusterName) {
    var n = 0
    if (appName !== "") {
      n = n++
    }
    appName = appName.replace(/[^A-Z0-9]/ig, "")
    appName = "".concat(n).concat(appName).concat(clusterName)
    return appName
  }
  getToggleDataTarget2(appName, clusterName) {
    var n = 0
    if (appName !== "") {
      n = n++
    }
    appName = appName.replace(/[^A-Z0-9]/ig, "")
    appName = "#".concat("").concat(n).concat(appName).concat(clusterName)
    return appName
  }

  getToggleID3(appName, clusterName) {
    var n = 0
    if (appName !== "") {
      n = n++
    }
    appName = appName.replace(/[^A-Z0-9]/ig, "")
    appName = "".concat(n).concat(appName).concat(n).concat(clusterName)
    return appName
  }
  getToggleDataTarget3(appName, clusterName) {
    var n = 0
    if (appName !== "") {
      n = n++
    }
    appName = appName.replace(/[^A-Z0-9]/ig, "")
    appName = "#".concat("").concat(n).concat(appName).concat(n).concat(clusterName)
    return appName
  }

  render() {
    let num = this.props.data
    // console.log("num:",num)
    let clust = this.props.clust
    // console.log("clust:",clust)    
    return (
      <div className="card-deck">
        <div className="card" style={{ 'width': '300px', 'height': '400px' }}>
          <div className style={{ 'margin': '5px' }}></div>
          <h3 className="card-title" style={{ 'textAlign': 'center' }}> Service Performance</h3>
          <div className style={{ 'margin': '-3px' }}></div>
          <div id={this.getToggleID(num.name, clust.clusterName)} className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <ServicePef data={this.props.data}/>
                <div className="card-footer">
                  <small className="text-muted">Last updated : {this.props.time} (UTC)</small>
                </div>
              </div>
              <div className="carousel-item">
                <div className style={{ 'margin': '10px' }}></div>
                <ServicePef2 />
                <div className="card-footer">
                <small className="text-muted">Last updated : {this.props.time} (UTC)</small>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href={this.getToggleDataTarget(num.name, clust.clusterName)} role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href={this.getToggleDataTarget(num.name, clust.clusterName)} role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="card" style={{ 'width': '300px', 'height': '400px' }}>
          <div className style={{ 'margin': '5px' }}></div>
          <h3 className="card-title" style={{ 'textAlign': 'center' }}> Infrastructure Development</h3>
          <div className style={{ 'margin': '-18px' }}></div>
          <div id={this.getToggleID2(num.name, clust.clusterName)} className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <InfDev data={this.props.data}/>
                <div className style={{ 'margin': '-22px' }}></div>
                <div className="card-footer">
                <small className="text-muted">Last updated : {this.props.time} (UTC)</small>
                </div>
              </div>
              <div className="carousel-item">
                <div className style={{ 'margin': '-5px' }}></div>
                <InfDev data={this.props.data}/>
                <div className style={{ 'margin': '-20px' }}></div>
                <div className="card-footer">
                <small className="text-muted">Last updated : {this.props.time} (UTC)</small>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href={this.getToggleDataTarget2(num.name, clust.clusterName)} role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href={this.getToggleDataTarget2(num.name, clust.clusterName)} role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="card" style={{ 'width': '300px', 'height': '400px' }}>
          <div className style={{ 'margin': '5px' }}></div>
          <h3 className="card-title" style={{ 'textAlign': 'center' }}> Service Performance</h3>
          <div className style={{ 'margin': '-5px' }}></div>
          <div id={this.getToggleID3(num.name, clust.clusterName)} className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
              <img width="95%" src={require('../media/map.png')} style={{ 'float': 'left' }} className="img-responsive center-block" alt="Responsive"/>
                <div className="card-footer">
                {/* <small className="text-muted">Last updated : {this.props.time} (UTC)</small> */}
                </div>
              </div>
              <div className="carousel-item">
                <div className style={{ 'margin': '-105px' }}></div>
                <img width="100%" src={require('../media/map.png')} style={{ 'float': 'left' }} className="img-responsive center-block" alt="Responsive"/>
                <div className="card-footer">
                <small className="text-muted">Last updated : {this.props.time} (UTC)</small>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href={this.getToggleDataTarget3(num.name, clust.clusterName)} role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href={this.getToggleDataTarget3(num.name, clust.clusterName)} role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default CardView;