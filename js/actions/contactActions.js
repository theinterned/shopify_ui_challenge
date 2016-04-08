import uuid from '../utils/uuid';
import { ADD_CONTACT } from '../constants/AppConstants';

export function addContact(contact, callback) {
  const nextID = uuid();
  if (callback) {
    callback(nextID, contact);
  }
  return {
    type: ADD_CONTACT,
    id: nextID,
    contact
  };
}
