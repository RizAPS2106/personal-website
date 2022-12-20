import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Header from './Containers/Header/Header';
import Statistic from './Containers/Statistic/Statistic';
import Certification from './Containers/Certification/Certification';
import Footer from './Containers/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavigationBar />
    <Header />
    <Statistic />
    <Certification />
    <Footer />
  </React.StrictMode>
);
