import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Slider from './Slider';
import Footer from './Footer';
import SideMenu from './AboutCompany';
import History from './History';
import LogoGallery from './logoGallery';
import ProductCatalog from './ProductCatalog';
import CompanyAwards from './CompanyAwards';
import PhotoGallery from './photoGallery';
import VideoGallery from './VideoGallery';
import NewsGallery from './NewsGallery';
import CareerComponent from './CareerComponent';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Slider />



    <CareerComponent />    
    <NewsGallery />
    <VideoGallery />
    <PhotoGallery />
    <CompanyAwards />
    <History /> 
    <LogoGallery />
    <ProductCatalog />
    <SideMenu />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
