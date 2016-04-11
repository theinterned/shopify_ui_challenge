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
  const addAction = {
    type: ADD_CONTACT,
    id: 33,
    contact
  };


  it('should return the default state', ()=>{
    expect(defaultResult).to.eql(defaultState);
  });

  describe('should handle ADD_CONTACT action', ()=>{
    it('should add a passed contact to the list of contacts', ()=>{
      expect(defaultState.length).to.equal(3);
      const actual = contactReducer(defaultState, addAction);
      expect(actual.length).to.equal(4);
      expect(actual[3].id).to.equal(33);
      expect(actual[3].name).to.equal('Test Contact');
    });
    it('should add the passed contact as the first member of an emapty contact list', ()=>{
      const actual = contactReducer({}, addAction); // start with an emapty previous state
      expect(actual.length).to.equal(1);
      expect(actual[0].id).to.equal(33);
      expect(actual[0].name).to.equal('Test Contact');
    });
  });

  describe('should handle EDIT_CONTACT action', ()=>{
    const contactChange = {
      name : 'Changed Contact'
    }
    const editAction = {
      type: EDIT_CONTACT,
      id: 33,
      contact: contactChange
    }
    const initialState = contactReducer(defaultState, addAction);

    it("should edit the contact matching the passed id", ()=>{
      const initialTarget = initialState[3];
      expect(initialState.length).to.equal(4);
      expect(initialTarget.id).to.equal(33);
      expect(initialTarget.name).to.equal('Test Contact');
      const actualState = contactReducer(initialState, editAction);
      const actualTarget = actualState[3];
      expect(actualState.length).to.equal(4);
      expect(actualTarget.id).to.equal(33);
      expect(actualTarget.name).to.equal('Changed Contact');
    });
    it("should not change the passed state", ()=>{
      const initialTarget = initialState[3];
      expect(initialTarget.name).to.equal('Test Contact');
      const actualState = contactReducer(initialState, editAction);
      const actualTarget = actualState[3];
      expect(actualTarget).not.to.equal(initialTarget);
      expect(initialTarget.name).to.equal('Test Contact');
      expect(actualTarget.name).to.equal('Changed Contact');
    });
    it("should silently fail if the passed ID is not found", ()=>{
      const wrongIDEditAction = Object.assign({}, editAction, {id: 333});
      const actualState = contactReducer(initialState, wrongIDEditAction);
      expect(actualState.length).to.equal(initialState.length);
    });
  });
});
