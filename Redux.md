#  Redux

    Redux 管理状态
    
    React 渲染数据
    
    工作原理：
        首先得到一个 store
        
        如果想拿到 state 使用 store.getState()获取数据
        
        如果想改变数据，发起一个 action   store.dispatch
        
        
        发起 action 之后， reducer 会计算出应用的下一个状态行
    
## Store 

    维护应用的状态，
    
    整个页面只有一个唯一的 Store 
    
    getState 得到整个应用的状态
    
    dispatch 发布 action 
    
    subscribe 监听 action 的发起
    
        action 发起之后，执行回调函数
    
    
    
##     action
    
    它是一个对象，必须有一个 type 属性 相当于
    
## state
    
    通过 store.getState() 拿到
    
    整个页面只有一个唯一的 state 
    
    
##     reducer
    
    一个函数，返回整个应用的 state

    reducer 的返回决定了 state 是什么样子
    
    接收2个参数： state 和 action 
    
    根据这两个参数 计算出应用的下一个 state
    

## createStore
 
    创建 Store
    
acti0n crertors

combineReducers(reducers)
