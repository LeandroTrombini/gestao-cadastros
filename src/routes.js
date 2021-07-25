import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify'

import Header from './Components/Header'
import Footer from './Components/Footer'
import ClientScreen from './Pages/ClientScreen'
import Home from './Pages/Home';
import ProductScreen from './Pages/ProductScreen'

export default function Routes() {
    return (
        <BrowserRouter>
         <Header />
            <div className="browser-container">
               
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/clients">
                        <ClientScreen />
                    </Route>
                    <Route exact path="/products">
                        <ProductScreen />
                    </Route>
                </Switch>
              
            </div>
           <Footer />
            <ToastContainer autoClose={3000} className="toast-container" />
        </BrowserRouter>
    )
}