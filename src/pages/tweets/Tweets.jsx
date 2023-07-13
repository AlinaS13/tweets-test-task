import { BtnWrp, GoBackButton, LoadMoreBtn, TweetsWrp } from './Tweets.styled';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as api from '../../shared/api';
import { Loader } from 'components/loader/Loader';
import TweetsList from 'components/tweetsList/TweestList';
import Notiflix from 'notiflix';

const Tweets = () => {
  const [tweets, setTweets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [pageLimit, setPageLimit] = useState(false);

  const navigate = useNavigate();
  const homeNavigate = () => {
    navigate('/');
  };
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const tweets = await api.getAllUser(currentPage);

        if (tweets.length === 0) {
          setPageLimit(true);
          Notiflix.Report.info(
            'Tweets ended(',
            "Sorry, we didn't find any more tweets! Please, try again later"
          );
        }
        setTweets(prevTweets => [...prevTweets, ...tweets]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [currentPage]);

  const onLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
    setTimeout(() => {
      window.scrollBy({ top: 500, behavior: 'smooth' });
    }, 200);
  };

  return (
    <TweetsWrp>
      <BtnWrp>
        <GoBackButton onClick={homeNavigate}>Go back</GoBackButton>
      </BtnWrp>
      {tweets && (
        <>
          <TweetsList tweets={tweets} />
          {!pageLimit && (
            <LoadMoreBtn id="moreBtn" onClick={onLoadMore}>
              Load more
            </LoadMoreBtn>
          )}
        </>
      )}
      {isLoading && <Loader />}
    </TweetsWrp>
  );
};

export default Tweets;
