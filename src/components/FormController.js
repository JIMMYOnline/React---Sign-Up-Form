import React from 'react';
import ContentForm from './ContentForm';
import '../styles/formController.css';
import '../styles/form.css';
import Field from './Field';

class FormController extends React.Component {
  constructor(props){
    super(props);
    this.fields = props.fields;
    this.fieldsSet = new Set();
    this.requiredFields = new Set();
    this.state = {
      fieldsFilled: this.fieldsSet,
      checkPrivacyPolicy: false
    }
    this.fieldOnChange = this.fieldOnChange.bind(this);
    this.isFormFilled = this.isFormFilled.bind(this);
    this.handlePrivacyPolicyCheck = this.handlePrivacyPolicyCheck.bind(this);
  }
  fieldOnChange(e) {
    if (e.target.value.trim().length > 0) {
      this.setState({
        fieldsFilled: this.fieldsSet.add(e.target.id)
      });
    } else {
      this.setState({
        fieldsFilled: this.fieldsSet.delete(e.target.id)
      });
    }
    console.log(this.state.fieldsFilled);
  }
  handlePrivacyPolicyCheck(){
    this.setState({checkPrivacyPolicy: !this.state.checkPrivacyPolicy});
  }
  isFormFilled(){
    if (!this.state.checkPrivacyPolicy) {
      return false;
    }
    for (const field of this.requiredFields) {
      if (!this.state.fieldsFilled.has(field)){
        return false;
      }
    }
    return true;
  }
  createForm() {
    const fieldElements = [];
    for (const field in this.fields) {
      if (this.fields[field].required) {
        this.requiredFields.add(field);
      }
      const fieldAttr = {
        field,
        classNameContent: this.fields[field]['full-width'] ? 'fullWidth' : 'noFullWidth',
        classNameLabel: `fieldName${this.fields[field].required ? ' required' : ''}`,
        onChangeEvent: this.fieldOnChange,
      }
      fieldElements.push(
        <Field key={field} fieldAttr={fieldAttr}></Field>
      );
    }
    return fieldElements;
  }
  render() {
    // agregar body 
    return (
      <ContentForm checkFormFilled={this.isFormFilled} handlePrivacyPolicyCheck={this.handlePrivacyPolicyCheck}>
        <div className="form">
        {this.createForm()}
        </div>
      </ContentForm>
    );
  }
}

export default FormController;