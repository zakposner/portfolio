import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch, Redirect  } from 'react-router-dom';
import promise from 'redux-promise';


// Components
import Sidebar from './components/sidebar';
import About from './components/about';
import PortfolioIndex from './components/portfolio-index';
import PortfolioItem from './components/portfolio-item';
import Skills from './components/skills';
import Experience from './components/experience';


// Redux
import reducers from './reducers';
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Sidebar />
                <div className="content-wrap">
                    <div className="container">
                        <Switch>                                                
                            <Route      path='/about'           component={About} />
                            <Route      path='/skills'          component={Skills} />
                            <Route      path='/experience'      component={Experience} />
                            <Route      path='/portfolio/:id'   component={PortfolioItem} />
                            <Redirect   path='/portfolio'       to='/' />
                            <Route      path='/'                component={PortfolioIndex} />                        
                        </Switch>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('app')
);
