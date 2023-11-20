import { useSelector } from 'react-redux';
import { initialFilter, getContacts } from '../ContactsSelectors';
import ContactToSelect  from '../ContactToSelect/ContactToSelect';
import css from './ContactList.module.css';

const getContactsToSee = (contacts, normalizeFilter) =>{
  return contacts.filter(({name}) =>{
    if(typeof name === 'string'){
      return name.toLowerCase().includes(normalizeFilter);
    }
    return false;
  });
};
const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(initialFilter);
  const normalizeFilter = filter ? filter.toLowerCase():'';
  const contactsToSee = getContactsToSee(contacts, normalizeFilter);

  return (
    <ul className={css.contactList}>
      {contactsToSee.map(contact => (
        <li className={css.contactItem} key={contact.id}>
          <ContactToSelect
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;