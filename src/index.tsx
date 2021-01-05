import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/components/App';
import './app/styles/index.scss';
import Helmet from 'react-helmet';

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <title>To Do List</title>
      <link
        rel='stylesheet'
        href='https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css'
        integrity='sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk'
        crossOrigin='anonymous'
      />
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
