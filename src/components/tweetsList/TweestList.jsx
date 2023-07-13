import TweetCard from 'components/tweetCard/TweetCard';
import { List } from './TweetsList.styled';

const TweetsList = ({ tweets }) => {
  return (
    <List>
      {tweets.map(({ id, tweets, followers, avatar }) => (
        <TweetCard
          key={id}
          tweets={tweets}
          followers={followers}
          avatar={avatar}
          id={id}
        />
      ))}
    </List>
  );
};

export default TweetsList;
