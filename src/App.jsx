import { Loader } from 'components/loader/Loader.jsx';
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Layout = lazy(() => import('./components/layout/Layout'));
const Home = lazy(() => import('./pages/home/Home'));
const Tweets = lazy(() => import('./pages/tweets/Tweets'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense
              fallback={
                <>
                  <Loader />
                </>
              }
            >
              <Layout />
            </Suspense>
          }
        >
          <Route index element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
