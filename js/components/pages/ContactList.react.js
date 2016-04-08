/*
 * ContactList
 * This is the first thing users see of our App
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import List from '../elements/List.react'

const renderContactItem = (item) => {
  const { id, name, phone_number, email_address} = item;
  const key = `contact_${id}`;
  return (
    <li key={key} className="listing__item">
      <Link to={`/contact/${id}`} className="listing__wrap-link">
        <h3 className="listing__header">{name}</h3>
        <dl>
          <dt>Phone: </dt><dd>{phone_number || "-"}</dd>
          <dt>Email: </dt><dd>{email_address  || "-"}</dd>
        </dl>
      </Link>
    </li>
  );
}

class ContactList extends Component {
  render() {
    const dispatch = this.props.dispatch;
    const contacts = this.props.contacts;
    return (
      <div>
        <header className="header clearfix">
          <div className="header__title">
            <h1 className="header__heading">Shopify UI Test</h1>
          </div>
          <div className="header__toolbar">
            <Link to="/contact/new" className="contact__add button--light" >Add a contact</Link>
          </div>
        </header>
        <List items={contacts} renderItem={renderContactItem} className="listing"/>
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
export default connect(select)(ContactList);
