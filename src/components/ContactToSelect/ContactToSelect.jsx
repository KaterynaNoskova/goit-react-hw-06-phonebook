import { useDispatch } from 'react-redux';
import { deleteContact } from '../ContactsInitialSlice';
import css from './ContactToSelect.module.css';

const ContactToSelect = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const remove = () => dispatch(deleteContact(id));

  return (
    <div>
      <span>
        {name} : {number}
      </span>
      <button className={css.buttonDelete} type="button" onClick={remove}>
        Delete
      </button>
    </div>
  );
};
export default ContactToSelect;