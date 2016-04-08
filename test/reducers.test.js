import expect from 'expect';
import contactReducer from '../js/reducers/contactReducer';
import * as constants from '../js/constants/AppConstants';


describe('contactReducer', () => {
  it('should return the default state', () => {
    expect(contactReducer(undefined, {})).toEqual([
      {
        id            : uuid(),
        name          : 'Steve Thomas',
        email_address : 'steven.thomas@shopify.com'
      },
      {
        id            : uuid(),
        name          : 'Michael Patten',
        email_address : 'michael.patten@shopify.com'
      },
      {
        id            : uuid(),
        name          : 'Ned Schwartz',
        email_address : 'ned@theinterned.net',
        phone_number  : '(416) 624-4737'
      }
    ]);
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
    expect(contactReducer(undefined, {}).length).toEqual(2);
    let nextState = contactReducer(undefined, action);
    expect(nextState.length).toEqual(3);
    expect(nextState[2].id).toEqual(3);
    expect(nextState[2].name).toEqual('Test Contact');
    nextState = contactReducer({}, action); // start with an emapty previous state
    expect(nextState.length).toEqual(1);
    expect(nextState[0].id).toEqual(3);
    expect(nextState[0].name).toEqual('Test Contact');
  });
});
