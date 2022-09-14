export const getContacts = store => store.contacts;

export const getFilterContacts = ({ contacts, filter }) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter( contact  =>
    contact.name.toLowerCase().includes(normalizedFilter));
}

export const getFilter = store => store.filter;



// const getFilterContacts = () => {
//     const caseInsensitive = filter.toLowerCase();
//     return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(caseInsensitive));
//   };