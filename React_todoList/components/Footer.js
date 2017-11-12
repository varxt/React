import React,{Component} from 'react';

export default class extends Component{

    render(){

        let {changeView,view,leftCount,showClearBtn,clearCompleted} = this.props;

	return (
        <footer className="footer">
        <span className="todo-count">
            <strong>{leftCount}</strong> left
        </span>
        <ul className="filters">
            <li>
                <a
                    href="#/"
                    className = {view==='all'?'selected':''}  //等于all给selected类名
                    onClick = {()=>{
                        changeView('all');
                    }                       
                    }
                >
                        All
                </a>
            </li>
            {' '}
            <li>
                <a
                    href="#/active"
                    className = {view==='active'?'selected':''}
                    onClick = {()=>{
                        changeView('active');
                    }}    
                >
                        Active
                </a>
            </li>
            {' '}
            <li>
                <a
                    href="#/completed"
                    className = {view==='completed'?'selected':''}
                    onClick = {()=>{
                        changeView('completed');
                    }}    
                >
                        Completed
                </a>
            </li>
        </ul>
        {
            showClearBtn?(
                <button
                    className="clear-completed"
                    onClick={clearCompleted}
                >
                    Clear completed
                </button>
            ):null 
        }
        
    </footer>
    )
        
    }
}























