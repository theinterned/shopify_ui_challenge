/*
 * ContactNew
 * Form to adda contact
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import ContactForm from '../views/ContactForm.react';
import { addContact } from '../../actions/contactActions';

class ContactNew extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const history = this.props.history;
    const contact = this.deserialize();
    const redirect = (id, contact) => {
      history.push(`/contact/${id}`);
    }
    this.props.dispatch(addContact(contact, redirect));
  }
  deserialize() {
    return this.refs.contact_form.deserialize();
  }
  render() {
    return (
      <div>
        <form action='post' onSubmit={(e) => this.handleSubmit(e) }>
        <header className="header clearfix">
          <div className="header__title">
            <h1 className="header__heading">Shopify UI Test</h1>
          </div>
          <div className="header__toolbar">
            <Link to="/contacts" className="cancel button" >Cancel</Link>
            <button type="submit" className="contact__add button--light" >Save</button>
          </div>
        </header>
        <main className="main">
          <h2 className="header__subhead">Add a contact</h2>
          <ContactForm ref="contact_form" />
        </main>
        </form>
      </div>
    );
  }
}

// REDUX STUFF

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    contacts: state.contacts
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(ContactNew);
