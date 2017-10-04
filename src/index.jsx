import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, Route, browserHistory} from 'react-router';
import App from './app/components/app';
import Profile from './app/components/pages/profiles';
import Board from './app/components/pages/board';
import Contact from './app/components/pages/contact';
import MissionVision from './app/components/pages/missionVision';
import Background from './app/components/pages/background';
import News from './app/components/pages/news';
import Gallery from './app/components/pages/gallery';
import reducers from './app/reducers/index';
import './assets/css/bootstrap.css';
import './assets/css/circle-hover.css';
import './assets/css/default.css';
import './assets/css/elastislide.css';
import './assets/css/flexslid.css';
import './assets/css/jsDatePick_ltr.css';
import './assets/css/lightbox.min.css';
import './assets/css/mega_menu.css';
import './assets/css/style.css';
import './assets/css/switcher.css';
const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
        <Route path="/" component={App}>

            <Route path="about/mission_vision" component={MissionVision}></Route>
            <Route path="about/background" component={Background}></Route>
            <Route path="profiles" component={Profile}></Route>
            <Route path="board" component={Board}></Route>
            <Route path="news" component={News}></Route>
            <Route path="gallery" component={Gallery}></Route>
            <Route path="contacts" component={Contact}></Route>
        </Route>
    </Router>
  </Provider>
  , document.querySelector('#container'));
