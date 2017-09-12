import React from 'react';
export default class Block extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{ textAlign: 'center' }} className="col-sm-6" >
        <div style={{ padding: '30px', border: '3px solid rgba(54, 64, 74, 0.08)', backgroundColor: '#fff' }} >
          <h4 className="{{p.titlecolor}}">{this.props.city}</h4>
          <div >
            <p className="text-muted text-nowrap">Temperature: {this.props.temp}</p>
            <p style={{ float: 'right', color: 'lightblue' }} className="text-muted text-nowrap"></p>
          </div>
        </div>
      </div>
    )
  }
}
