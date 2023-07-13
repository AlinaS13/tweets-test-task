import { useNavigate } from 'react-router-dom';
import { Button, HomeWrp, Text } from './Home.styled';

const Home = () => {
  const navigate = useNavigate();

  const tweetsNavigate = () => {
    navigate('/tweets');
  };
  return (
    <HomeWrp>
      <Text>Welcome to the simple tweets app</Text>
      <Button onClick={tweetsNavigate}>Go to tweets</Button>
    </HomeWrp>
  );
};

export default Home;
