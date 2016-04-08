/*
 * ContactNew
 * Form to adda contact
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Control from '../elements/Control.react';
import { addContact } from '../../actions/contactActions';

class ContactNew extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const history = this.props.history;
    const contact = this.deserialize();
    console.log('handleSubmit', e, this);
    const redirect = (id, contact) => {
      console.log('navigationg to', id, contact, this);
      history.push(`/contact/${id}`);
    }
    this.props.dispatch(addContact(contact, redirect));
  }
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
      <div>
        <form action='post' onSubmit={(e) => this.handleSubmit(e) }>
        <header className="header clearfix">
          <div className="header__title">
            <h1 className="header__heading">Leads!</h1>
          </div>
          <div className="header__toolbar">
            <Link to="/contacts" className="cancel button" >Cancel</Link>
            <button type="submit" className="contact__add button--light" >Save</button>
          </div>
        </header>
        <main className="main">
          <h2 className="header__subhead">Add a lead</h2>
          <Control ref="name" attr="name" label="Name" type="text" required="true" />
          <Control ref="phone_number" attr="phone_number" label="Phone" type="tel" />
          <Control ref="email_address" attr="email_address" label="Email" type="email" />
        </main>
        </form>
      </div>
    );
  }
}

// REDUX STUFF

// Which props do we want to inject, given the global state?
function select(state) {
  console.log('select', state);
  return {
    contacts: state.contacts
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(ContactNew);
