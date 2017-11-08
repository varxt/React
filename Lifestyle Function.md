> ## 1. - ## 组件受控
某些事件有自己的行为,比如input，输入东西的时候，
页面状态发生变化,这是组件本身的行为。

如果给input一个value值，这样就收到了react的控制，可以通过onChange来setState来改变input的value。

合成的事件对象

> ## event 
## nativeEvent:访问浏览器 dom 元素的事件对象

preventDefalut

stopPropagation

target 拿到真实的dom元素


> ## map方法
数组下的一个方法，接收一个回调函数，回调函数里面接收的参数是：（元素，索引，数组）

回调函数的返回值会 替换原来的元素 返回一个新数组

原来被遍历的数组没有变化

> ## 当把数组写在 jsx 里面 react 会自动展开
key保证是不一样的,加标识，可以提高性能

## 在数组里面的 jsx 元素应该在最外层的结构有一个 key ，应该保证相应数据的 key 是唯一的，同一份结构，永远保证不管如何视图变化，相同的数据对应同一个 key 值

> ## 组件之间的交流（数据传递）,组件之间公共 props
进行数据传递,数据从顶层流向底层，而且永远是这样, 不能修改 props



单向数据流 

子组件通过props拿到数据  父组件只能获取 不能去改变

改变父组件的数据

## 拿到真实的DOM元素
在元素上面声明 ref 属性，可以通过组件拿到真实的dom元素
    ref ="df"=>this.ref.df(现在已经不被推荐)
    
    ref = { （el）={ this.cont = el }}; this.cont 就可以拿到真实的     DOM元素
    
    
## (用类声明的)组件的生命周期
    mounting阶段：出生阶段，只能被出生一次
    updating阶段：更新阶段，活着时候的阶段
    unmounting阶段：卸载，死亡阶段
比如App
从无到有 

## 生命周期的函数

mounting
    constructor
    componentWillMount 组件将要被挂载执行
    
    render 就是那一刻
    
    在挂载完成之前，所有的组件都应该 render
    所有组件 render 之后，开始依次挂载：同层级的组件从先往后挂载，父子组件先挂载子组件
    
    子组件
    
    如果要拿到真实的 dom 元素，必须在组件挂载完成之后
    
    
updating

    componentWillReceiveProps()  奇葩
    
    shouldComponentUpdate()      特殊  
    决定组件会不会被更新，默认返回 true 表示永远都可以被更新，如果返回 false，会阻断 render 的执行，拦截这一次更新。
    可以优化性能
    
    
    componentWillUpdate()        更新前
    
    render                       就是那一刻
    
    componentDidMount()         更新后   
    
    在这个函数里面发起请求
    

注意事项：
    更新阶段不要 setState ,除了奇葩那个时候
    
## unmounting阶段
    
       组件将要被挂载执行
    

## promise
解决异步问题，解决回调函数的噩梦

## Router

    browerHistory      需要2大支持： 高版本浏览器 后端服务器配合
    
    hashHistory
    
    
    BrowerRouter      
    
    HashRouter
    
    
## BrowerRouter

使用 browerHistory 放到最顶层，把其他的组件作为 children

## Route

    path的属性: 如果地址匹配到了这个路径，就会显示
    
    component属性：接收一个组件变量
    
    不能嵌套元素
    
    会往组件里面传入3个 props： history ， loaction , match
    
## Link

    最后会被渲染成 a 链接
    
    to的属性：跳转到哪里








    

    

