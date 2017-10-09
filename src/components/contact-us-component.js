import React, { Component } from 'react';
import Header from './header-component';
import { Field, reduxForm } from 'redux-form';
import { sendMail } from '../actions/index';
import emailValidator from 'email-validator';

class ContactUs extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        {field.optional ? <label className='optional-field'>(Optional)</label> : '' }
        {field.element === 'input' ? 
          <input
            className='form-control'
            type='text'
            placeholder={field.placeholder}
            {...field.input}
          /> :
          <textarea
            className='form-control'
            type='text'
            placeholder={field.placeholder}
            {...field.input}
          /> 
        }
        {touched && error?
        <div className='text-help error-msg'>
          <img className='warning-icon' src='../style/images/warning.png'></img>
          {error} 
        </div>
        : ''}
      </div>
    );
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
      	<Header selected='contactUs'/>
      	<div className='static-page-container'>
          <div className='static-page-header'> Say Hello! </div>
          <div className='red-divider'></div>
          <form className='contact-us-form' onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field
              element='textarea'
              label='Your Comments'
              name='comments'
              placeholder="Let us know what you loved and what you didn't"
              component={this.renderField}
            />
            <Field
              label='Your Email ID'
              element='input'
              name='email'
              optional = 'true'
              placeholder='Where would you like us to contact you'
              component={this.renderField}
            />
            <button type='submit' className='btn'>Send</button>
          </form>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if(!values.comments) {
    errors.comments = 'Ohh! You forgot to enter some comments!';
  }

  if(values.email && !emailValidator.validate(values.email)) {
    errors.email = 'Agh! You might have typed an invalid Email ID!';
  }

  return errors;
} 

export default reduxForm({
  validate,
  form: 'ContactUsForm',
  fields: ['comments', 'email']
})(ContactUs);
