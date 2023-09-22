import React, { Suspense } from 'react';
import './styles/index.scss';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { Navbar } from 'widgets/Navbar';
import { NotFoundPage } from 'pages/NotFoundPage';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';

const App = () => {
  return (
    <div className="app">
      <Navbar  />
      <div className="content-page">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route
              path={'/'}
              element={
                <div className="page-wrapper">
                  <MainPage />
                </div>
              }
            />

            <Route
              path={'*'}
              element={
                <div className="page-wrapper">
                  <NotFoundPage />
                </div>
              }
            />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
