import React ,{ Component } from "react";
import { render } from "react-dom";

//基于ES6语法创建的组件，现在用这种方式创建
class Example extends Component {
  constructor(props) {
    super();
  }
  render(){
    return <div>Hello World!</div>
  }
}

/*下面是基于ES5创建的组件，现在基本不使用，官方推荐上面的ES6语法
const Example = React.createClass({
  render:function(){
    return <div>Hello World!</div>
  }
})
*/

/*
  这里有必要介绍一下ES6语法创建的组件的特点：
  1.在定义方法时不用再使用function关键字，这一点极大地简化了代码，增强可读性；
  定义方法 以组件中必有的render方法为例：
  ES6 语法
*/
 class App extends Component {
   constructor(props) {
     super();
   }
   render(){
     return <div>Hello World!</div>
   }
 };

//ES5 语法
var App = React.createClass({
  render:function(){
    return <div>Hello World</div>
  }
})

/*
  从上面的两个组可以清楚地看出两种语法的区别之处，ES6会看起来更加的直观，但对于初学者会有些不友好，这些没关系，接触的对了，自然你就对这种语法熟悉起来。
*/

/*
   如果你是初学者，或许对State和props感到陌生，这里只是拿来对比语法的不同而给我们带来的便利，在后面还会有更加详细的讲解
   这里来看一下初始化state和porps的不同之处，你就会爱上ES6语法。
*/

//ES6
class App extends Component {
  //内部写法
  /*static defaultProps = {
    value:"11111"
  }*/
  constructor(props) {
    super();
    this.state = {
      value:"Hello World!"
    }
  }
  render(){
    return <div>{this.state.value}</div>
  }
}

App.defaultProps = {
  value:"11111"
}

//ES5
var App = React.createClass({
  getInitalState:function () {
    return{
      value:"Hello World!"
    }
  },
  getDefaultProps:function(){
    return{
      value:"11111"
    }
  }
})

/*
  在ES6语法创建的组件中，我们可以直接在constructor中给this.state赋值，看起来更加简洁明了，在给props指定初始值得时候，ES6提供了两种方式，第一种是定义在组件外部，使用App.defaultProps = { value:"11111"}指定，或者在组件内部指定static defaultProps = { value:"11111"}，这两种方式都可以，但推荐写在组件外部，这样组件结构会更加清晰。
  这里还有一点需要注意，在ES6中定义的方法之间不需要像ES5那样用逗号（,）隔开，这是两种语法的不同，这一点要非常注意。
*/

/*
  这里在提一下props的类型验证的相关知识，这部分知识不一定在你所有的组件中都会用到，但是在你不知道要接受的props数据类型的时候是很重要的，他会强制的帮你去验证传给你的数据，是不是你想要的数据，如果不是他就会报错。
*/
class Example extends Component {
  constructor(props) {
    super();
  }
  render(){
    return <div>Hello World!</div>
  }
}
Example.propsType = {
  value:React.PropsType.string.isRequired
}
/*
  这里props的验证规则也很直观，value是字符串类型的，并且必须有，如果这两个条件有一个不满足，他就会报错，所以在使用时一定要小心使用
*/
