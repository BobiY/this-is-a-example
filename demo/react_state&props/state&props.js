/*
  state 和 props 是 react 数据中不可或缺的部分，在一个大型应用，这里主要指组件嵌套多的情况。props就是数据流的主干，他将一层层的向下流，直到最底层，而state就像是这个主干数据流的支流，他将数据带到了组件中需要数据的地方，这样描述多少有些不严谨，但是这样能帮助你了解一下他们的具体职能。
*/

/*
  props是组件的属性，我们可以给每个组件设置默认的属性值（前面已经讲解过，忘了翻一下），在组件中，可以通过this.props去拿到所有的属性值，需要注意的是，我们只能给组件设置默认的属性值，但是不能在组件中去改变属性值。
*/

class A extends Component {
  constructor(props) {
    super();
  }
  render(){
    //这样做是错误的，不允许这样的操作
    this.props.value = "heihei";
    return <div>{this.props.value}</div>
  }
};
//设置默认值，允许这样的操作
A.defaultProps = {
  value:"heihei"
};


class B extends Component {
  constructor(props) {
    super();
  }
  render(){
    return <div><A value = {"hahah1"}/></div>
  }
};

/*
  其实从上面的例子中不难看出，props的值只有组件的父组件才可以操作，自己是不能操作的，这一点要记住，自己只能设置默认值
*/


/*
  state是组价的状态，设置初始值得方法也很简单，这是状态，也就是当前组件处于什么状态，组件可以通过state去维护自己的状态，说到这，你应该就明白了state是组件自己可以进行更改的，而且，严格的说，state只有组件本身可以更改，外部拿不到自然也就不能更改。
*/
class App extends Component {
  constructor(props) {
    super();
    this.state = {
      value:"heihei"
    }
  }
  componentDidMount(){
    this.setState({
      value:"hahaha"
    })
  }
  render(){
    return <div>{this.state.value}</div>
  }
};
/*
  state是组件自己维护自己状态用的，你可以将props的值给他，也可以不给，取决于你的具体需求，这里你知道了state的作用，他的设置方法就是通过this.setState(),他的参数是一个对象，看上面的例子，你也许会更加清楚他的用法。
*/
