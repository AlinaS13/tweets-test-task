import { useState } from 'react';
import {
  Avatar,
  Card,
  FollowBtn,
  FollowingBtn,
  InterRing,
  Line,
  Logo,
  Ring,
  UserDataWrp,
  UserFollowers,
  UserTweets,
} from './TweetCard.styled';

const TweetCard = ({ tweets, followers, avatar, id }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(() => {
    const storedData = localStorage.getItem(id);
    if (storedData) {
      const { followersCount } = JSON.parse(storedData);
      return followersCount;
    }
    return followers;
  });
  const handleUnfollowClick = () => {
    setIsFollowing(false);
    setFollowersCount(prevCount => prevCount - 1);
    localStorage.setItem(
      id,
      JSON.stringify({ isFollowing: false, followersCount: followersCount - 1 })
    );
  };
  const handleFollowClick = () => {
    setIsFollowing(true);
    setFollowersCount(prevCount => prevCount + 1);
    localStorage.setItem(
      id,
      JSON.stringify({
        isFollowing: true,
        followersCount: followersCount + 1,
      })
    );
  };

  const isUserFollowing = localStorage.getItem(id)
    ? JSON.parse(localStorage.getItem(id)).isFollowing
    : false;

  const formatedFollowers = followersCount.toLocaleString('en-US');
  return (
    <Card key={id}>
      <Logo src={require('../../img/Logo-1-x.png')} alt="logo" />
      <Line />
      <Ring>
        <InterRing />
      </Ring>
      <Avatar src={avatar} alt="User avatar" w="62" />
      <UserDataWrp>
        <UserTweets>{tweets} tweets</UserTweets>
        <UserFollowers>{formatedFollowers} followers</UserFollowers>
        {isFollowing || isUserFollowing ? (
          <FollowBtn onClick={handleUnfollowClick}>Following</FollowBtn>
        ) : (
          <FollowingBtn onClick={handleFollowClick}>Follow</FollowingBtn>
        )}
      </UserDataWrp>
    </Card>
  );
};

export default TweetCard;
