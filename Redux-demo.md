### 概念：
对于 Redux，我们将获得一个全局的 store。

这个 store 将绑定在一个最高等级的组件中，然后将 App 的数据流入所有的子组件（其实整个 App 就已经是这个最高等级组件的子组件了）。

你能 connect 全局 store，使用：connect wrap 和 mapStateToProps 方法.
首先，人们就将任何事情都交给了 Redux store。

比如：Users, modals, forms, sockets...，主要你知道的。


下面是一个相计数 App，然后使用了 Redux。

### 例子：

主要需要注意的是 counter 数据，使用 mapStateToProps 映射了数据，并且使用 connect 方法包裹组件，this.state.counter 现在就变成了 this.props.counter，然后这个值就是通过全局 store 获取的，这个全局store 将值传递给当前组件的 props。



    import React from "react"
    import { connect } from "react-redux"
    import Actions from "./Actions.js"
    
    class App extends React.Component {
      constructor(props) {
        super(props)
        this.addOne = this.addOne.bind(this)
      }
    
      addOne() {
        this.props.dispatch(Actions.addOne())
      }
    
      render() {
        return (
          <div>
            <button
              onClick={ this.addOne }>
              Increment
            </button>
            { this.props.counter }
          </div>
        )
      }
    }
    
    const mapStateToProps = store => {
      return {
        counter: store.counter
      }
    }

export default connect(mapStateToProps)(App)

现在当你点击按钮的时候，通过一个 action => dispatched 使全局 store 更新。然后这个数据通过外层组件传递到当前组件。

值得注意的是：当 props 被更新的时候，这也将触发组件的 re-render（重新渲染）=> 这与你更新 state 的时候一样。

### & 应用场景

对于 Redux store 是很好的保持了除 UI 状态数据外的应用状态。有一个不错的例子，比如用户的登录状态。对于在在登录状态改变的同时，多数组件需要访问这个数据信息做出响应。这些组件（至少有一个被渲染）将需要重新渲染与更新的信息。

Redux 触发事件在你需要跨组件或者跨路由的情况下是很有用的。
比如有一个登录弹框，当你的 App 中有多个按钮点击都将触发弹出它的时候。而不是在你需要渲染这个弹框的多个地方做判断，你能通过一个顶层的 App 组件去使用 Redux action 去触发它并且修改 store 的值。
总结：你想将跨组件的保持数据的时候能够使用 store。