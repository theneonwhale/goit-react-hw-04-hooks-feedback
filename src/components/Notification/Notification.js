import PropTypes from 'prop-types';
import s from './Notification.module.css';

function Notification({ message = 'Nothing to show.' }) {
  return <p className={s.notification}> {message} </p>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
