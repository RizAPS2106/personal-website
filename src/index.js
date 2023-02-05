import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Header from './Sections/Header/Header';
import Statistic from './Sections/Statistic/Statistic';
import Certification from './Sections/Certification/Certification';
import Footer from './Sections/Footer/Footer';

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
