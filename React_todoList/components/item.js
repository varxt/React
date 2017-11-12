import React,{Component} from 'react';

export default class extends Component{

    render(){
        let {id,
            content,
            isActive,
            todoOnChange,
            deleteTodo
        } = this.props;    //这些数据从props来
        return (
            <li key = {id}
            className={isActive ?'':"completed"}
            >
            
            <div className="view">
                <input
                    className="toggle"
                    type="checkbox"
                    checked = {!isActive}
                    onChange = { ()=>todoOnChange(id)}
                />
                <label>
                    {content}
                </label>
                <button className="destroy"
                onClick={()=>deleteTodo(id)} //告诉butn删哪个的id
                />
            </div>
            <input
                ref="editField"
                className="edit"
            />
            </li>
        )

    }
}