import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes, Navigate } from 'react-router-dom'

import NavTop from './components/NavTop'
import NavSide from './components/NavSide'


function App() {
  return (
    <React.Fragment>
      <NavTop />
      <NavSide />
  
      <Routes>
        {/* components go here */}



        {/* 
        
        example of restricted path, uses RequireAuth function below */}
        
        {/* <Route path={'/my-account/sucs'} 
          element={
            <RequireAuth redirectTo='/sucs'>
              <SucsComponent />
            </RequireAuth>
        }/> */}

      </Routes>

    </React.Fragment>
  );
}

// function RequireAuth({ children, redirectTo }) {
//   let isAuthenticated = localStorage.getItem('token');
//   return isAuthenticated ? children : <Navigate to={redirectTo} />
// }

export default App;
