// import React,{Component} from 'react';
// import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';



import Nav from './component/Nav';

import Home from './container/home/Home';

import Movie from './container/movie/Movie';

import Teleplay from './container/teleplay/Teleplay';

function Gl(){
    return (
        <div>ajslddjkdldlsk</div>
    )
}


export default class App extends Component{
    
        // this.state = {
        //     view:'home'
        // };

        // [
        //     this.changeView              //传了一个对象给   fn的name就是changeView
        // ].forEach( fn=>this[fn.name]=fn.bind(this))
    //}

    // changeView(view){
    //     this.setState({
    //         view
    //     })
    // }

    render(){
        // let {view} = this.state;

        // let {changeView} = this;
        
        // let viewComp = null;

        // switch(view){
        //     case 'movie':
        //         viewComp = <Movie/>
        //         break;
        //     case 'teleplay':
        //         viewComp = <Teleplay/>
        //     break;
        //     default:
        //     viewComp = <Home/>
        // }

        //这些东西都是路由给的
        //history就是要做跳转了   loaction可以拿到地址栏信息  match是匹配到了谁
        // let {history,location,match} = this.props;
        return (

//  不是本次效果开始
            // <div>
            //     {/* <Nav history={history} */}
            //     {/* <Nav history={history} */}
            //     {/* {
            //         ...{
            //             changeView   //把函数传给nav
            //         }
            //     }                
            //     /> */}
            //     <Route>
            //         /* {({history})=> <Nav history={history}/>} */

            //         {props=> <Nav history={history}/>}
            //     </Route>   
            //     <Route exact={true} path="/" component={Home}/>
            //     {/* <Route path="/teleplay" component={Teleplay}/> */}
            //     <Route path="/teleplay" render={
            //         ({history,location,match})=>{
            //             return (
            //                 <div>
            //                     <h1>这个是剧情</h1>
            //                     <Teleplay location={location}/>
            //                 </div>
            //             )
            //         }

            //     }/>


            //     <Route path="/movie" component={Movie}/>
            //      {/* {viewComp}  */}
            // </div>
  //  不是本次效果结束 

            <div>
                <Switch>
                {/* <Nav/> */}

                <Route path="/" component={props => <Nav{...props}/>}></Route> 
                <Route>
                    <div>
                        404
                    </div>
                </Route> 
                </Switch>
                <Route exact={true} path="/" component={Home} />
                <Route path="/teleplay" render={
                    
                    ({history, location, match})=>{
                        return (<Redirect to={"/movie"}/>)
                       
                    }
                    
                } />
                <Route path="/movie" component={Movie} />
            </div>
  
  


        )
        
    }
}



ReactDOM.render(
    <Router>                     
         <Route path='/' component={App}/>    
 {/* {<App/>}  */}
    </Router>,           
    document.getElementById('root')
); 

