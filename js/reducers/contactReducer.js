import { ADD_CONTACT } from '../constants/AppConstants';
import assignToEmpty from '../utils/assign';
import uuid from '../utils/uuid';

const initialState = [
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
];

const contact = (state = initialState, action) => {
  Object.freeze(state); // Don't mutate state directly, always use assign()!
  switch (action.type) {
    case ADD_CONTACT:
      return assignToEmpty({id: action.id}, action.contact);
      break;
    default:
      return state
  }
}
const contacts = (state = initialState, action) => {
  Object.freeze(state); // Don't mutate state directly, always use assign()!
  switch (action.type) {
    case ADD_CONTACT:
      return [
        ...state,
        contact(undefined, action)
      ];
    default:
      return state;
  }
}

export default contacts;
