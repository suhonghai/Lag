import React, { Component } from 'react';
import logo from './logo.svg';
import Loadable from 'react-loadable';
import './App.css';
import {
  BrowserRouter as Router,//路径模式可以换成hash模式
  Route, //路由切换的坑
  Link, //模板切换的组件
  NavLink,
  Redirect,
  Switch
} from 'react-router-dom'
const Mine = Loadable({
      loader: () => import('./pages/Mine'),//异步加载的组件
      loading: () => <div>Loading...</div> //加载的过程中使用那个主见
    });
const Position = Loadable({
      loader: () => import('./pages/Position'),//异步加载的组件
      loading: () => <div>Loading...</div> //加载的过程中使用那个主见
    });
const Search = Loadable({
      loader: () => import('./pages/Search'),//异步加载的组件
      loading: () => <div>Loading...</div> //加载的过程中使用那个主见
    });
const Login = Loadable({
      loader: () => import('./pages/Login'),//异步加载的组件
      loading: () => <div>Loading...</div> //加载的过程中使用那个主见
    });
const Regist = Loadable({
      loader: () => import('./pages/Regist'),//异步加载的组件
      loading: () => <div>Loading...</div> //加载的过程中使用那个主见
    });
const Phone = Loadable({
      loader: () => import('./pages/Phone'),//异步加载的组件
      loading: () => <div>Loading...</div> //加载的过程中使用那个主见
    });
const Detail = Loadable({
      loader: () => import('./pages/Detail'),//异步加载的组件
      loading: () => <div>Loading...</div> //加载的过程中使用那个主见
    });
class App extends Component {
  render() {
    return (
    	<Router>
    		<div className="App">

		    	{/*动态路由：不同的路径加载同一组件*/}
		        <Switch>
			        <Route path="/position" component={Position}></Route>
			        <Route path="/mine" component={Mine}></Route>
			        <Route path="/search" component={Search}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/regist" component={Regist}></Route>
              <Route path="/phoneLogin" component={Phone}></Route>
              <Route path="/detail" component={Detail}></Route>
			        <Redirect path="/" to="/position" exact></Redirect>
          		<Route render={()=>{return <div>  404 ！</div>}} />
		        </Switch>
		    </div>
    	</Router>
    );
  }
}

export default App;
