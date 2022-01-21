import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavTop from './components/NavTop'
import NavSide from './components/NavSide'
import Content from './components/Content'

function App() {
  return (
    <React.Fragment>
      <div className='position-fixed'>
        <NavTop />
        <NavSide />
      </div>
        <Content />
    </React.Fragment>
  );
}

// example of restricted path, uses RequireAuth function below
        
// <Route path={'/my-account/sucs'}
//    element={
//      <RequireAuth redirectTo='/sucs'>
//        <SucsComponent />
//      </RequireAuth>
// }/>

// function RequireAuth({ children, redirectTo }) {
//   let isAuthenticated = localStorage.getItem('token');
//   return isAuthenticated ? children : <Navigate to={redirectTo} />
// }

export default App;
