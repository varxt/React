import {bindActionCreators} from 'redux';
import {Provider,connect} from 'react-redux';

import createStore from './redx/configureStore';

import {increment,decrement,incrementIfOdd,asyncIncrement} from './counterRedux';


const store = createStore();

class Counter extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let {value,increment,decrement,incrementIfOdd,asyncIncrement} = this.props;
        // console.log(this.props)
        return (
            <div>
                <button
                onClick={decrement}
                >-</button>
                <input type="text" value={value}/>
                <button onClick={increment}>+</button>
                <button onClick={()=>incrementIfOdd(value)}>increment odd</button>
                <button onClick={asyncIncrement}>increment async</button>
            </div>
        )
        
    }
}


Counter = connect(
    (state)=> ({value:state}),
    (dispatch)=>bindActionCreators({
        increment,
        decrement,
        incrementIfOdd,
        asyncIncrement
    },dispatch)
)(Counter)







ReactDOM.render(
    <Provider store={store}>
        <Counter/>
    </Provider>
    ,             
    document.getElementById('root')
)