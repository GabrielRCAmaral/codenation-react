import React from 'react';

class Contact extends React.Component {
  render() {
    return (
    <article className="contact" data-testid="contact">
    <span  className="contact__avatar" >
      <img src={this.props.avatarContact} 
        alt={this.props.nameContact}/>
    </span>
    <span className="contact__data">{this.props.nameContact}</span>
    <span className="contact__data">{this.props.phoneContact}</span>
    <span className="contact__data">{this.props.countryContact}</span>
    <span className="contact__data">{this.props.admissionDateContact}</span>
    <span className="contact__data">{this.props.companyContact}</span>
    <span className="contact__data">{this.props.departmentContact}</span>
</article>
);
  }
}

export default Contact;
