/**
 * Created by varun on 21/9/17.
 */
import {createStore, combineReducers,applyMiddleware} from 'redux';
import user from './user.reducer';
import logger from './logger.middleware';


const reducers =combineReducers({
    user
});
const middleWare = applyMiddleware(logger);
const store =createStore(reducers,middleWare);
export default store;