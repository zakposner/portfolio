import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch, Redirect  } from 'react-router-dom';
import promise from 'redux-promise';


// Components
import Container from './components/container';
import About from './components/about';
import Contact from './components/contact';
import Experience from './components/experience';
import PortfolioIndex from './components/portfolio-index';
import PortfolioItem from './components/portfolio-item';
import Sidebar from './components/sidebar';
import Skills from './components/skills';


// Redux
import reducers from './reducers';
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Sidebar />
                <Container>
                    <Switch>                                                
                        <Route      path='/about'           component={About} />
                        <Route      path='/skills'          component={Skills} />
                        <Route      path='/experience'      component={Experience} />
                        <Route      path='/contact'         component={Contact} />
                        <Route      path='/portfolio/:id'   component={PortfolioItem} />
                        <Redirect   path='/portfolio'       to='/' />
                        <Route      path='/'                component={PortfolioIndex} />                        
                    </Switch>
                </Container>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('app')
);
