import contactReducer from '../js/reducers/contactReducer';
import * as constants from '../js/constants/AppConstants';

import chai from 'chai';
const expect = chai.expect;


describe('contactReducer', () => {
  it('should return the default state', () => {
    const result = contactReducer(undefined, {});
    let actual = [
      {
        id            : result[0].id, // hacky way to get uuids to match
        name          : 'Steve Thomas',
        email_address : 'steven.thomas@shopify.com'
      },
      {
        id            : result[1].id, // hacky way to get uuids to match
        name          : 'Michael Patten',
        email_address : 'michael.patten@shopify.com'
      },
      {
        id            : result[2].id, // hacky way to get uuids to match
        name          : 'Ned Schwartz',
        email_address : 'ned@theinterned.net',
        phone_number  : '(416) 624-4737'
      }
    ]
    expect(result).to.eql(actual);
  });
  it('should add a passed contact to the list of contacts', () => {
    let contact = {
      name          : 'Test Contact',
      email_address : 'test@shopify.com',
      phone_number  : '(416) 123-4567'
    };
    let action = {
      type: constants.ADD_CONTACT,
      id: 3,
      contact
    };
    let state = contactReducer(undefined, {});
    expect(state.length).to.equal(3);
    let nextState = contactReducer(state, action);
    expect(nextState.length).to.equal(4);
    expect(nextState[3].id).to.equal(3);
    expect(nextState[3].name).to.equal('Test Contact');
    nextState = contactReducer({}, action); // start with an emapty previous state
    expect(nextState.length).to.equal(1);
    expect(nextState[0].id).to.equal(3);
    expect(nextState[0].name).to.equal('Test Contact');
  });
});
