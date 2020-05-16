import React from 'react';
import HeadForm from './HeadForm';
import FormDescription from './FormDescription';
import FooterForm from './FooterForm';
import '../styles/contentForm.css';


class ContentForm extends React.Component {
  constructor(props){
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div className="contentForm">
      <HeadForm />
      <FormDescription />
      {this.props.children}
      <FooterForm checkFormFilled={this.props.checkFormFilled} handlePrivacyPolicyCheck={this.props.handlePrivacyPolicyCheck}/>
      </div>
    );
  }
}

export default ContentForm