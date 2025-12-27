import contactsData from '../data/contacts.json'

export default defineEventHandler(() => {
  return {
    contacts: contactsData.contacts,
  }
})
