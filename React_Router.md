## Router

    browerHistory      需要2大支持： 高版本浏览器 后端服务器配合
    
    hashHistory
    
    
    BrowerRouter      
    
    HashRouter
    
    
## BrowerRouter

使用 browerHistory 放到最顶层，把其他的组件作为 children

## Route

    path的属性: 如果地址匹配到了这个路径，就会显示
    
    exact={true} 只会在 path 匹配 loaction.pathname  时才匹配。
    
   
    component属性：接收一个组件变量
    
#     Route不能嵌套元素
#     Route不能嵌套元素
#     Route不能嵌套元素
    
    1、会往组件里面传入3个 props： history ， loaction , match
    
    2、可以接收一个回调函数，会往回调函数传入一个对象作为参数，这个
    
    对象里面有：history ， loaction , match，回调函数需要返回你的JSX结构


    render: 接收一个回调函数，和 component 第2点一样
    
    children : 和 render 一样，不过，它会无论如何都会匹配到。








        
## Link

    最后会被渲染成 a 链接
    
    to的属性：跳转到哪里
    
        接收字符串： ‘、rus' 一个url地址

    replace:boolean值
    
    true 跳转视图的时候，替换掉浏览器 history stack 里面的 当前的 entry
    
    false 跳转视图的时候，往history stack 里面 push 一个新的 entry
    
    push history.push('/') 这样可以记录
    
    
history 里面的 location 是实时的。

## 传入的三个属性
    
    history 
    
    location
        
        history 的 location 是可变的，是实时的，是不稳定的。如果你想要location
        
        直接读取此location  而不是从location拿到 this.props.location
    
    match
    
    
    immutable 不可变的
    
        操作一个对象 不会影响另一个对象
        
        

    mutable 可变的 
    
        会把原来的数据改变，因为不知道这个数据会在哪里使用，流向了哪里。
    
         （JavaScript 中的对象一般是可变的（Mutable），因为
    
    使用了引用赋值，新的对象简单的引用了原始对象，改变新的对象将影响到
    
    原始对象。如 foo={a: 1}; bar=foo; bar.a=2 你会发现此时 foo.a 也被改成了
    
    2。虽然这样做可以节约内存，但当应用复杂后，这就造成了非常大的隐患，
    
    Mutable 带来的优点变得得不偿失。为了解决这个问题，一般的做法是使用
    
    shallowCopy（浅拷贝）或 deepCopy（深拷贝）来避免被修改，但这样做造
    
    成了 CPU 和内存的浪费。）
        
一个对象被引用的时候，一定要是个新的数组或对象

StaticRouter 不重要

## NavLink

    activeStyle
    
    activeClassName
    
    exact
    其他和 Link 一样
    
##     Redirect
        
        to 的属性，如果它被渲染的时候，会重定向到一个新的地方
        
        string 或 object
    
##     Switch
    
        一旦匹配到一个，不再继续往下匹配
        
#     WithRouter
        
        一个高阶组件，接收一个组件作为参数（Aac）,然后导出一个组件，
        
        这个时候 Aac 组件的 props 就有了那3个属性了
        
        
render   路径匹配了 才会渲染


//只能选一个

children  不管是什么 都会渲染


component

path的属性: 如果地址匹配到了这个路径，就会显示