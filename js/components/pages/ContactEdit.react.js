/*
 * ContactShow
 * Form to adda contact
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import ContactForm from '../views/ContactForm.react';
import { editContact } from '../../actions/contactActions';

class ContactShow extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const history = this.props.history;
    const contactID = this.props.routeParams.id;
    const contact = this.deserialize();
    const redirect = (id, contact) => {
      history.push(`/contact/${id}`);
    }
    this.props.dispatch(editContact(contactID, contact, redirect));
  }
  deserialize() {
    return this.refs.contact_form.deserialize();
  }
  selectByID (id, contacts) {
    return contacts.find(c => c.id == id);
  };
  render() {
    const contactID = this.props.routeParams.id;
    const contact = this.selectByID(contactID, this.props.contacts);
    let title, content;
    if (contact) {
      const {name, phone_number, email_address, id} = contact;
      title = `${name}`;
      return (
        <div>
          <form action='post' onSubmit={(e) => this.handleSubmit(e) }>
          <header className="header clearfix">
            <div className="header__title">
              <h1 className="header__heading">Shopify UI Test</h1>
            </div>
            <div className="header__toolbar">
              <Link to={`/contact/${id}`} className="cancel button" >Cancel</Link>
              <button type="submit" className="contact__edit button--light" >Save</button>
            </div>
          </header>
          <main className="main">
            <h2 className="header__subhead">Edit {name}</h2>
            <ContactForm ref="contact_form" {...contact} />
          </main>
          </form>
        </div>
      );
    } else {
      title = `No Contact found with ID ${contactID}`;
    }

  }
}

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    contacts: state.contacts
  };
}

export default connect(select)(ContactShow);
