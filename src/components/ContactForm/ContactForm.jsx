import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../ContactsInitialSlice';
import { getContacts } from '../ContactsSelectors';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

   const submit = evt => {
    evt.preventDefault();
    const nameVal = evt.target.name.value;
    const numberVal = evt.target.number.value;
    if (nameVal) {
      const searchContact = contacts.find(
        ({ name }) => name.toLowerCase() === nameVal.toLowerCase()
      );
      if (searchContact) {
        alert(`${nameVal} is already in contacts`);
        return;
      }
    }
    dispatch(addContact(nameVal, numberVal));
    evt.target.reset();
  };

  return (
    <form className={css.form} onSubmit={submit}>
      <h1 className={css.formTitle}>Phonebook</h1>
      <span className={css.formName}>Name</span>
      <input
        className={css.nameInput}
        type="text"
        name="name"
        title="Input Name"
      />
      <span className={css.formName}>Number</span>
      <input
        className={css.numberInput}
        type="tel"
        name="number"
        title="Input Number"       
      />
      <button className={css.buttonAdd} type="submit">
        Add contact
      </button>
    </form>
  );
};
export default ContactForm;