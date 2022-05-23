import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Mamiferos from './componentes/Mamiferos';
import Reptiles from './componentes/Reptiles';
import Aves from './componentes/Aves';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="reptiles" element={<Reptiles />} />
    <Route path ="Aves" element = {<Aves />} />
>>>>>>> 7358a6e70e81f628d2d5befc6c007670d00cb05f
</Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
