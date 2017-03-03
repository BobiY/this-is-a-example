/*
  JSX语法是react推出的一种js语法糖，只是对原生js语法的一种包装，这是首先需要明确的事情，了解了这些事情以后我们开始看他对js语法进行了那些包装，而我们又可以怎样使用。
*/
/*
  首先，允许我们在js中去使用类似于HTML标签的语法,这里也可以使用类似XML的语法。
*/
//这样使用是合法的
const div = <div>Hello World!</div>;

//当没有内容时，我们还可以这样去定义

const div = <div />;

/*
  以上的两种语法都是合法的，还是上面强调的，这里是在js中定义的标签，不是在HTML中，所以这里遵循的是JSX语法，而JSX语法规定，我们可以使用但标签，或者是闭合标签，来表示我们想要创建的元素。
*/

/*
   当我们创建的元素需要加属性是我们应该怎么做呢？其实做法跟在html中是类似的
*/

const div = <div className = "div" data-index = "1" id = "div">Hello World!</div>

/*
  就像上面这样的用法就可以了，这里需要注意得是，class是js中的关键字，所以在给元素添加类名时要用className而不是class，在lable标签中得for属性在添加时存在同样的问题，要将for属性改为htmlFor，原因跟class一样，因为for是js中的关键字。其他的属性添加规则和html中的规则是一致的。
*/

/*
  在大多数情况下，我们会使用类名去为元素添加样式，但如果你想为你的元素添加行内样式时你应该怎么做呢？这将引出另一个JSX的语法，就是它允许你在元素中间添加js表达式，但是为了标示你写的是表达式而非是要显示的内容，你应该将你的js表达式写在一个大括号中，以表示你写的是一个js表达式。
*/

const div = <div style = {{color:"red"}}>Hello World!<div>

/*
  添加行内样式时有一点需要注意，你看到他有两个大括号去包括你要添加的样式，这里其实看下面的添加方法你会更加清楚为什么会是这样的添加方式。
*/

const obj = {color:"red"};
const div = <div style = {obj}>Hello World</div>;

/*
  其实上下两种写法是等价的，原因还是一点，这里是js，你是html，你的所有规则要建立在js语法之上，所以你看到的两个大括号，第一个是JSX语法的要求，第二个表示你添加的样式的对象。
*/


/*
   既然JSX允许在元素内些一些js表达式，当然要用大括号进行包括，下面给出了一些例子，将展示具体使用
*/

//可以将变量作为类名，内容
const string = "Hello World!"
const div = <div className = {string}>{string}</div>

//这里你还可以写一个立执行的函数，让他返回一些你想要的元素

const add = () => <span>我是Span标签</span>;
const div = <div>{add()}</div>;

//这些都不算厉害，这里你还可以写三元表达式,这在你需要根据某些条件去渲染组件时是很有用的

const bool = false;
const div = <div>{bool?<span>true</span>:<span>false</span>}</div>

//这里还有更厉害的东西，如果你传入的变量是一个数组类型的，react的jsx语法会自动帮你展开数组去渲染

const arr = [1,2,3,4];
const div = <div>{arr}</div>;
//最终的渲染结果是 1 2 3 4

//有了这样的设定，就会使我们的书写变得灵活许多，因为我们只需要把需要渲染的元素放进一个数组里，再放进大括号中，react就会自动的帮我们展开数组，渲染元素

const arrEle = [<span>1</span>,<span>3</span>,<span>4</span>]
const div = <div>{arrEle}</div>

//这里介绍三个常用的数组操作方法，是在ES5中出现的，因为在react中使用率相当的高，所以要掌握。

//Array.map(),这个方法看名字就知道是遍历数组，这个方法的参数是一个回调函数，需要注意的是，回调函数必须有返回值！！！
const arr1 = [1,2,3,4,5,6];
const arr2 = arr.map( (item,index) => item*item );
//arr2 = [1,4,9,16,25,36];   上面的map得回调函数返回值为arr1中的每个元素乘以自己的值，这里需要注意，回调函数里定义的逻辑，是你要怎么根据数组原始值去得到你想要的返回值，最终返回的值就是你想要的值，最终得到的返回值是新数组，原数组不会被改变。

//Array.filter();这个方法就如他的明字，过滤，它比较特殊，它的参数与map一直，只是他不能去处理原来数组中的参数，它只能根据你的特定条件去返回满足条件的值，他的回调也必须有返回值，但只能是true（满足条件，返回这个值） or false（不满足条件，跳过这个值）
const arr1 = [1,2,3,4,5,6];
const arr2 = arr.filter( val => val !== 4);

//最终arr2 = [1,2,3,5,6];4被排除了；

//最后在介绍一种不太常用，但是可以代替for循环的forEach();用法跟map一样，只是在回调函数的最后没有返回值，所以跟for循环一样，在参数处理完以后，需要我们手动去记录改变后的数据
const arr1 = [1,2,3,4,5,6];
let arr2 = [];
arr1.forEach( (item,index) => {arr2.push(item*item)} );

//JSX的介绍就到这里，下面将开始讲解怎么取应用
