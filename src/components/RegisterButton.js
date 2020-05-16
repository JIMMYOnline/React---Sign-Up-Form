import React from 'react';

class RegisterButton extends React.Component {
  constructor(props){
    super(props);
    this.checkFormFilled = props.checkFormFilled;
    this.checkForm = this.checkForm.bind(this);
  }
  checkForm(){
    if (this.checkFormFilled()) {
      alert('filled');
    }
  }
  render() {
    return (
      <button type="button" onClick={this.checkForm}>REGISTER</button>
    );
  }
}

export default RegisterButton;