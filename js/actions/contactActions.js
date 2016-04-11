import uuid from '../utils/uuid';
import { ADD_CONTACT, EDIT_CONTACT } from '../constants/AppConstants';

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

export function editContact(id, contact, callback) {
  if (callback) {
    callback(id, contact);
  }
  return {
    type: EDIT_CONTACT,
    id: id,
    contact
  }
}
