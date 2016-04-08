import { addContact } from '../js/actions/contactActions';
import { ADD_CONTACT } from '../js/constants/AppConstants';

import chai from 'chai';
const expect = chai.expect;

describe('ContactActions', () => {
  describe('addContact', () => {
    it('should add the passed contact', () =>{
      const contact = {
        name          : 'Test Contact',
        email_address : 'test@shopify.com',
        phone_number  : '(416) 123-4567'
      }
      let expectedResult = {
        type: ADD_CONTACT,
        contact
      }
      let result = addContact(contact);
      expectedResult.id = result.id; // hacky way to get uuid to match
      expect(result.id).to.be.defined;
      expect(result).to.eql(expectedResult);
    });
  });
});
