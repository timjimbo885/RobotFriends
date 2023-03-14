import React from 'react';  //react package
import ReactDOM from 'react-dom/client'; //connects react package to DOM, 
// Reason there is two React imports is because React cam be used with anything
// Mobile, VR, not sute sites. So two packages for main react and whatever the connector is
import './index.css'; //This is where the css is
// import Hello from './Hello';  //This is below - under <React.Strictmode> - 3 lines below
// We use ReactDOM with .render, in there it wants us to render 
 // <React.StrictMode>    Put this on the page, render it within 'root'
 //    <App />
 //  </React.StrictMode>
//  (document.getElementById('root')); so in the div 'root' this is rendered
// import Card from './Card';
import reportWebVitals from './reportWebVitals';
// import Cardlist from './Cardlist.js';
import 'tachyons';
import App from './containers/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <>
    <App />
    {/*So Robots in purple is the prop, but we are saying 
    that prop = the robots array which is {robots}*/}
  </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
