import {Link, NavLink} from 'react-router-dom';

let style = {
    background: 'orange'
}

export default class extends Component{
    constructor(props){
        super(props);
        
        this.state={
            //保存当前所在的页面
            from:props.location.pathname
        }
        this.fromChange = this.fromChange.bind(this);
    }

    //点击的时候，更新到所跳转到的页面
    fromChange(from){
        // this.setState({from:this.props.location.pathname})
        this.setState({from})
    }

    render(){

        let {history,location} = this.props;

        let {fromChange} = this;

        let {from} = this.state;

        return (
            // <ul>
            //     {/* <li><a href="#/"
            //         onClick = { ()=>changeView('home')}
            //     >首页</a></li>
            //     <li><a href="#/"
            //         onClick = { ()=>changeView('teleplay')}
            //     >剧情</a></li>
            //     <li><a href="#/"
            //         onClick = { ()=>changeView('movie')}
            //     >视频</a></li> */}
            //     {/* <li><Link to="/">首页</Link></li> */}

            //     <li><span
            //         onClick={
            //             ()=>{
            //                 fromChange('/')
            //                 history.push('/',{from})
            //             }
            //         }
            //     >首页</span></li>
            //     {/* <li><Link to="/teleplay">剧情</Link></li> */}
            //     <li><Link to={
            //         {
            //             pathname:'/teleplay',
            //             search:'?a=4&b=8&h=89',
            //             hash:'#dfkj',
            //             state:{
            //                 from
            //             }
            //         }
            //     }
            //     onClick = {()=>{fromChange('/teleplay')}}
            //     >剧情</Link></li>
            //     {/* <li><Link to="/movie">视频</Link></li>*/}
            //     <li><Link to={
            //         {
            //             pathname:'/movie',
            //             state:{
            //                 from
            //             }
            //         }
            //     }
            //     onClick = {()=>{fromChange('/movie')}}
            //     >视频</Link></li>    
            // </ul>
            // NavLink 的用法
            <ul>
                <li>
                    <NavLink exact
                        to={
                        {
                            pathname:'/',
                            state:{
                                from
                            }
                        }
                        }
                        activeStyle={style}
                        onClick={
                        ()=>{
                            fromChange('/')
                            history.push('/',{from})
                        }
                    }
                    >首页</NavLink>
                </li>
                <li><NavLink
                    activeStyle={style}
                    to={
                    {
                        pathname:'/teleplay',
                        search:'?a=4&b=8&h=89',
                        hash:'#dfkj',
                        state:{
                            from
                        }
                    }
                    }
                    onClick = {()=>{fromChange('/teleplay')}}
                    >剧情</NavLink>
                </li>
                <li><NavLink
                    activeStyle={style}
                    to={
                    {
                        pathname:'/movie',
                        state:{
                            from
                        }
                    }
                    }
                    onClick = {()=>{fromChange('/movie')}}
                    >视频</NavLink>
                </li>
            </ul>
        )
        
    }
}
