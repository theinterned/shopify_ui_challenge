import { addContact, editContact } from '../js/actions/contactActions';
import { ADD_CONTACT, EDIT_CONTACT } from '../js/constants/AppConstants';

import chai from 'chai';
const expect = chai.expect;

describe('ContactActions', () => {
  const contact = {
    name          : 'Test Contact',
    email_address : 'test@shopify.com',
    phone_number  : '(416) 123-4567'
  }
  describe('addContact', () => {
    it('should create ADD_CONTACT action', () =>{
      let expected = {
        type: ADD_CONTACT,
        contact
      }
      const actual = addContact(contact);
      expected.id = actual.id; // hacky way to get uuid to match
      expect(actual.id).to.be.defined;
      expect(actual).to.eql(expected);
    });
    it('should provide a callback hook', (done)=>{
      const actual = addContact(contact, ()=> done());
    });
  });
  describe('editContact', ()=>{
    const expected = {
      type: EDIT_CONTACT,
      id: 1,
      contact
    };
    it('should create EDIT_CONTACT action', ()=>{
      const actual = editContact(1, contact);
      expect(actual).to.eql(expected);
    });
    it('should provide a callback hook', (done)=>{
      const actual = editContact(1, contact, ()=> done());
    });
  });
});
