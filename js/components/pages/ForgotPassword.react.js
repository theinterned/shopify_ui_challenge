/*
 * ContactShow
 * Form to adda contact
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ContactForm from '../views/ContactForm.react';
import Ajax from 'simple-ajax';

class ContactShow extends Component {
  handleSubmit(e) {
    e.preventDefault()
    const { email } = this.deserialize();
    if (this.validate(email)){
      console.log('woo');

      const ajax = new Ajax({
        url: "http://shopify-fed-test.herokuapp.com/email.json",
        method: "POST",
        contentType: "application/json",
        dataType: "json",
        data: { email }
      });
      ajax.on('success', (request) => {
        console.log(arguments);
      });
      ajax.send();

    } else {
      console.error('boo');
    }
    // debugger;
  }

  validate(data) {
    return /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(data);
  }

  deserialize() {
    return {
      email: this.refs.email_input.value
    }
  }

  render() {
    return (
      <div>
        <h1>Forgot password?</h1>
        <p>Eneter your email address to reset your password</p>
        <form onSubmit={ (e)=> this.handleSubmit(e) } >
          <label className="label">Email</label>
          <div className="contol control-full">
            <input ref="email_input" className="input-text control-full-input" type="text" id="email" name="email" placeholder="Enter your email address" />
            <button className="button button-submit control-full-button" type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    contacts: state.contacts
  };
}

export default connect(select)(ContactShow);
