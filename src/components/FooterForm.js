import React from 'react';
import Alert from './Alert';
import Check from './Check';
import RegisterButton from './RegisterButton';

class FooterForm extends React.Component {
  constructor(props){
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div>
        <Alert />
        <Check handlePrivacyPolicyCheck={this.props.handlePrivacyPolicyCheck}/>
        <RegisterButton checkFormFilled={this.props.checkFormFilled}/>
      </div>
    );
  }
}

export default FooterForm;