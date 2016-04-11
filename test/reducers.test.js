import contactReducer from '../js/reducers/contactReducer';
import {ADD_CONTACT, EDIT_CONTACT} from '../js/constants/AppConstants';

import chai from 'chai';
const expect = chai.expect;

describe('contactReducer', ()=>{
  const defaultResult = contactReducer(undefined, {});
  const defaultState = [{
    id            : defaultResult[0].id, // hacky way to get uuids to match
    name          : 'Steve Thomas',
    email_address : 'steven.thomas@shopify.com'
  },{
    id            : defaultResult[1].id, // hacky way to get uuids to match
    name          : 'Michael Patten',
    email_address : 'michael.patten@shopify.com'
  },{
    id            : defaultResult[2].id, // hacky way to get uuids to match
    name          : 'Ned Schwartz',
    email_address : 'ned@theinterned.net',
    phone_number  : '(416) 624-4737'
  }];
  const contact = {
    name          : 'Test Contact',
    email_address : 'test@shopify.com',
    phone_number  : '(416) 123-4567'
  };
  it('should return the default state', ()=>{
    expect(defaultResult).to.eql(defaultState);
  });
  describe('should handle ADD_CONTACT action', ()=>{
    const addAction = {
      type: ADD_CONTACT,
      id: 3,
      contact
    };
    it('should add a passed contact to the list of contacts', ()=>{
      expect(defaultState.length).to.equal(3);
      const actual = contactReducer(defaultState, addAction);
      expect(actual.length).to.equal(4);
      expect(actual[3].id).to.equal(3);
      expect(actual[3].name).to.equal('Test Contact');
    });
    it('should add the passed contact as the first member of an emapty contact list', ()=>{
      const actual = contactReducer({}, addAction); // start with an emapty previous state
      expect(actual.length).to.equal(1);
      expect(actual[0].id).to.equal(3);
      expect(actual[0].name).to.equal('Test Contact');
    });
  });
});
