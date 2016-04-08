/*
 * ContactForm
 * Form to edit a contact
 */

import React, { Component, PropTypes } from 'react';
import Control from '../elements/Control.react';

class ContactForm extends Component {
  deserialize() {
    const {name, phone_number, email_address} = this.refs;
    return {
      name          : name.value(),
      phone_number  : phone_number.value(),
      email_address : email_address.value()
    }
  }
  render() {
    return (
      <fieldset>
        <Control ref="name" attr="name" label="Name" type="text" required="true" />
        <Control ref="phone_number" attr="phone_number" label="Phone" type="tel" />
        <Control ref="email_address" attr="email_address" label="Email" type="email" />
      </fieldset>
    );
  }
}

// Wrap the component to inject dispatch and state into it
export default ContactForm;
