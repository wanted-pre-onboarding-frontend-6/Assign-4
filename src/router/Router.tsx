import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './Path';

const Routers = () => {
  const routing = routes();
  return (
    <BrowserRouter>
      <Suspense fallback={<div></div>}>
        <Routes>
          {routing.map(({ path, element, children }) => {
            return (
              <Route path={path} element={element} key={path}>
                {children?.map(({ path, element }) => {
                  return <Route path={path} element={element} key={path} />;
                })}
              </Route>
            );
          })}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
export default Routers;
