import expect from 'expect';
import { addContact } from '../js/actions/contactActions';
import { ADD_CONTACT } from '../js/constants/AppConstants';

describe('ContactActions', () => {
  describe('addContact', () => {
    it('should add the passed contact', () =>{
      const contact = {
        name          : 'Test Contact',
        email_address : 'test@statflo.com',
        phone_number  : '(416) 123-4567'
      }
      const expectedResult = {
        type: ADD_CONTACT,
        id: 3,
        contact
      }
      let result = addContact(contact);
      expect(result).toEqual(expectedResult);
      expect(result.id).toEqual(3);
    });
  });
});
