
import {createStore,applyMiddleware} from 'redux';

import thunk from 'redux-thunk';

import reducer from '../counterRedux';

export default function configureStore(){
    return createStore(reducer , applyMiddleware(thunk));
}

// function counter(state=0, action){
//     return {
//         a:1,b:6
//     }
// }