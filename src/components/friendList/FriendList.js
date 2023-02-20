import { FriendListItem } from './FriendListItem';
import PropTypes from 'prop-types';
import { List } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => {
        return (
          <li key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              isOnline={friend.isOnline}
              name={friend.name}
            />
          </li>
        );
      })}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
};
