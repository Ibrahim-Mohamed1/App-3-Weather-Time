import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DataProvider from "./DataProvider"
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
    <BrowserRouter>
        <DataProvider>
            <App />
        </DataProvider>
    </BrowserRouter>
    , document.getElementById('root'));