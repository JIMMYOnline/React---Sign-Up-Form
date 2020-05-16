import React from 'react';
import '../styles/check.css';

class Check extends React.Component {
  constructor(props){
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div className="check">
        <input type="checkbox" name="vehicle" value="Bike" onChange={this.props.handlePrivacyPolicyCheck}/>
        <p>I hereby confirm that I have read and understood the  a bike</p>
        <a href="www.">Privacy Policy</a>
      </div>
    );
  }
}

export default Check;