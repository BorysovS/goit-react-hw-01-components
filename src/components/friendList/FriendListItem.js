import PropTypes from 'prop-types';
import { GrStatusGoodSmall } from 'react-icons/gr';

export const FriendListItem = ({ avatar, isOnline, name }) => {
  return (
    <div>
      <GrStatusGoodSmall />
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </div>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
