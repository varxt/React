import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import './common/style/index.css';
import './common/style/base.css';

import Item from '../components/item.js';
import Footer from '../components/Footer.js';

// import todoData from './common/data/todosData';

class App extends Component{         //写一个组件
    constructor(props){
        super(props)
        this.state={
            inputVal:'',
            todosData:[],
            view:'all'                 //新建一个变量
        };

        this.inputChange = this.inputChange.bind(this); 
        this.inputOnEnter = this.inputOnEnter.bind(this);
        this.todoOnChange = this.todoOnChange.bind(this);

        this.deleteTodo = this.deleteTodo.bind(this);
        this.toggleAll = this.toggleAll.bind(this);
        this.changeView = this.changeView.bind(this);
        this.clearCompleted = this.clearCompleted.bind(this);

    }

    inputChange(ev){
        this.setState({
            inputVal:ev.target.value   //系统对象下面去拿value
        })
        // console.log(ev.target.value);
    }

    //回车,添加一个todo
    inputOnEnter(ev){

        // console.log(ev.target.value);
        

        let {value} = ev.target;
        let {todosData} = this.state;

        if(ev.keyCode!==13) return;
        // console.log(ev.target.value);

        if( !value.trim() )return;

        this.setState({
            todosData:[
                ...todosData,             //更新todosDate数据
                {
                    id:Math.random(),
                    content: value,
                    isActive: true
                }
            ],
            inputVal :''

        })

    }
    
    //改变一个todo 是否被完成
    todoOnChange(id){
        let {todosData} = this.state;

        let newTodos = todosData.map((todo,indx)=>{
            if(todo.id === id){
                todo.isActive = !todo.isActive;
            }
            return todo;
        });

        this.setState({
            todosData: newTodos
        })
    }

    //删除一个todo
    deleteTodo(id){
        let {todosData} = this.state;
        let newTodos = todosData.filter((todo, indx)=>{   //如果是你这个id就 return false
            return todo.id === id ? false : true
        });

        this.setState({
            todosData:newTodos   //通过newTodos显示
        })
    }

    //全选
    toggleAll(ev){
        let {checked} = ev.target;
        let {todosData} = this.state;  //解构出来 因为要操作todosData

        this.setState({
            todosData:todosData.map(elt=>{  //返回结果是数组
                elt.isActive = !checked;
                return elt;                    
            })
        })
    }

    // 切换显示不同状态的 todo
    changeView(view){
        // console.log(view)
        this.setState({
            view
        })
    }

    //清空已完成
    clearCompleted(){
        let {todosData} = this.state;
        //回调函数返回true 元素会被保留
        let newTodos = todosData.filter((todo,indx)=>{
            return todo.isActive ? true : false
        });

        this.setState({
            todosData:newTodos
        })
    }
    

    render(){
        let {inputVal,todosData,view} = this.state;  //先解构出view

        let {inputChange,
             inputOnEnter,
             todoOnChange,
             deleteTodo,
             toggleAll,
             changeView,
             clearCompleted      
        } = this;

        

        // let {data} = this.props;
        // 所有的长度
        let todosLength = todosData.length;

        let leftCount = todosLength;    //假设全部被勾选

        let filteredTodosData = todosData.filter( (elt, indx, arr)=>{
            let {id,content,isActive} = elt;

            let shouldStay = false; 

            if(!isActive) leftCount--;  //如果被勾选，就减去

            switch(view){
                case 'active':
                    if(isActive===true){
                        shouldStay = true;     //找一个变量来控制true/false
                    }
                break;
                case 'completed':
                    if(isActive===false){
                        shouldStay = true;     //找一个变量来控制true/false
                    }
                break;
                default:
                    shouldStay = true;
            }
            return shouldStay;
        })

        //过滤完数据用这个数据来return 一份结构
        let todosComponent = filteredTodosData.map((elt, indx, arr)=>{
        let {id,content,isActive} = elt;

       
        return (

            <Item
                key={id}
                {...{              
                    id,
                    content,
                    isActive,
                    todoOnChange,
                    deleteTodo
                }}

                 /*let aa = {
                     id,
                     content,
                     isActive,
                     todoOnChange,
                    deleteTodo } 
                    可以写 {...aa}
                    */
            />
        )
        })

        return (   
            <div>
                <header className="header">
                    <h1>todos</h1>
                    <input
                        className="new-todo"
                        placeholder="What needs to be done?"
                        autoFocus={true}
                        value={inputVal}
                        onChange={inputChange}   //点击的时候调用这个函数
                        onKeyDown={inputOnEnter}
                    />
                </header>
                
                {todosLength>0?(
                    <section className="main">
                        <input
                            className="toggle-all"
                            type="checkbox" 
                            onChange={toggleAll} 
                            checked = { leftCount===0 }
                        />
                        <ul className="todo-list">
                            {todosComponent}
                        </ul>
                    </section>
                ):null}

                {todosLength>0?(
                    <Footer
                     {...{
                            changeView,
                            view,
                            leftCount,
                            clearCompleted:clearCompleted,
                            showClearBtn: todosLength > leftCount
                    }}
                    />
                ):null}
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,             //下面要渲染App  也可以，引入App组件去渲染
    document.getElementById('root')
); 