import { combineReducers } from 'redux';
import app                 from './app.reducers';
import pages               from './pages.reducers';
import jokes               from './jokes.reducers';


export default combineReducers({
  pages,
  app,
  jokes
});
