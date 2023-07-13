import { Loader } from 'components/loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, StyleNavlink } from './Layout.styled';

const Layout = () => {
  return (
    <div>
      <Header>
        <nav>
          <StyleNavlink to="/">Home</StyleNavlink>
          <StyleNavlink to="/tweets" state={{ from: '/' }}>
            Tweets
          </StyleNavlink>
        </nav>
      </Header>
      <Suspense
        fallback={
          <>
            <Loader />
          </>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
