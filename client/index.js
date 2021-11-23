// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// const rootElement = document.getElementById('root');
// //https://www.pluralsight.com/guides/how-to-use-geolocation-call-in-reactjs
// //import { useLocation } from 'react-router-dom';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   rootElement
// );

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { render } from 'react-dom';
import App from './App';
const rootElement = document.getElementById('root');

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        {/* <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="home" element={<Home />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

// import React from 'react';
// import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom';
// import { render } from 'react-dom';
// import App from './App';
// const rootElement = document.getElementById('root');
// import AboutUs from './pages/aboutus';
// import Landing from './pages/landing';

// render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />}>
//         <Route path="/" render={() => <Redirect to="/landing" />} />
//         <Route path="/landing" element={<Landing />} />
//         <Route path="/aboutus" element={<AboutUs />} />
//         {/* <Route path="signin" element={<SignIn />} />
//         <Route path="home" element={<Home />} /> */}
//       </Route>
//     </Routes>
//   </BrowserRouter>,
//   rootElement
// );
