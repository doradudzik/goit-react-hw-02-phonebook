import css from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.item} key={id} id={id}>
          {name}: {number}
          <button className={css.btn} id={id} onClick={() => handleDelete(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactList;
