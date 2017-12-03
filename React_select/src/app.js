import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './common/style/test.css';

import Data from './common/data/data.js';

// console.log(Data)

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            selected:[]
        }
    }


    onselect(elt,order){
        

        let {selected} = this.state;

        let inThere = selected.some((elt)=>
            elt.order===order
        );

        if(inThere){
            selected = selected.map(item=>{
                if(item.order===order){
                    console.log(111)
                    item.item = elt;
                }
                return item;
            })
        }else{
            selected.push({item:elt,order})
        }
        

        selected.sort((a,b)=>a.order-b.order)

        
        

        
        

        this.setState({
            selected
        })
        // console.log(selected)

        
        // console.log(elt,order);

    }

    onDelete(order){
        let {selected} = this.state;

        selected= selected.filter((elt)=>{
            return elt.order!==order
        })

        this.setState({
            selected
        })
    }

    render(){

        let {selected} = this.state;

        // console.log(selected)

        let selectedComp = selected.map((elt)=>{
            return (
                    <span 
                        key={elt.item.id}>
                        {elt.item.desc}
                        <em
                            onClick={()=>
                                this.onDelete(elt.order)
                            }
                        >X</em>
                    </span>
            )
        })

       
        let comp = Data.map( (elt)=>{
            return (
                <dl
                    key={elt.id}
                >
                    <dt>{elt.sort}</dt>
                    {
                        elt.data.map((item)=>{
                            return <dd
                                className={
                                    selected.some(elt=>elt.item.id === item.id) ? 'active':''                                }
                                key={item.id}
                                // onClick = {()=>this.onselect()} 
                                onClick = {()=>this.onselect(item,elt.order)} 
                            >{item.desc}</dd>
                        })
                    }
                </dl>
            )
        });



        return(
            <div className = "wrap" >
                <div className="selbox">
                    <span>你的选择:
                        
                    </span>
                    
                    
                    <div className="sel">
                        {selectedComp}
                    
                    </div>
                    </div>
                
                <div>
                    {comp}
                </div>
            </div>
        )
    }
}




ReactDOM.render(
    <App/>,
    document.getElementById('root')
)