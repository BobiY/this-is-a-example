/*
    列表渲染在react中是很重要的一部分内容，因为这个部分关系到react的性能，考虑到这一点，这里就很有必要的说一下这个东西。这里你可能会疑惑，列表渲染在哪都有，为什么要在这特别他出呢？原因很简单，因为react是用js去计算哪些dom需要更新，而列表又是很多内容的集合，处理好列表渲染的问题，就相当于极大地提高了react的性能。看个例子，
*/
class App extends Copmonent {
  constructor(props) {
    super();
    this.state = {
      arr:[1,2,3,4,5,6]
    }
  }
  render(){
    const { arr } = this.state
    return (
      <div>
        <ul>
           {arr.map( (val) => <li>{val}</li> )}
        </ul>
      </div>
    )
  }
};

/*
   这个例子你会感觉列表就应该是这样子的渲染啊，没什么不同之处，就是循环，然后渲染返回的元素列表。你在js中这样做是没问题的，但是如果你在react中这麽做了，也没问题，在页面上你依然会拿到你想要的列表，但是当你打开控制台的时候会发现一个 Waring，并且意思你还看不懂，这时你就慌了，怎磨回事，我都是照规矩来的啊，其实奥秘就在你听了很多遍的虚拟dom。
*/
/*
  虚拟dom是干什么的相信你也有一定的了解，但是如果深究下来你估计也不知道是个怎么回事；这里也不做过多的纠结，上面列表的 Waring 其实是提示你每个列表元素要有你个 key 属性，来标示他们在列表中所处的位置。是不是觉得这个很高笑，要标识他的位置，位置。你自己都不知道他的位置在哪，你拿什么去标识他的位置，气冲冲的你肯定就想，不管了，就那样吧，反正结果也出来了。但是当你要做项目，这个Waring又出现了，你就不得不去想一想究竟是个什么意思。
*/

/*
  这个 key 属性其实不是给你看的，是给react的diff算法看得，它能根据列表元素的这个标识符去算出这个元素需不需要重新去渲染，就是这样，看到这你就恍然大悟了，那我岂不是怎么写都可以，其实不是的，这个 key 属性的值要遵循一定的规则。
*/

/*
  规则一，key值在一个列表中是唯一的，看不懂这个描述，没事，先看例子，再回过头来体会
*/

const arr = [1,2,3,4,5,6,7];
const List1 = () => {
  const arr1 = arr.map( (val,index) =><li key = {index}> {val} </li> );
  return arr1;
};

const List2 = () => {
  const arr1 = arr.map( (val,index) =><li key = {index}> {val*val} </li> );
  return arr1;
};

render(<ul> {List1(),List2()} </ul>,document.getElementById('app'));

/*
  List1 和 List2 他们都用了index作为每个li的key属性的值，因为循环的是同一个数组，所以key值也是相同的，但是你会发现，这样的写法react是完全认同的，不会报错，也不会 Waring ，ok，这样就证明了key值只要在这个列表之内是唯一的就ok。
  这里还要注意，如果你循环数据中，每个元素都有id或者其他唯一的标识去标记这个元素，那么这个值将是完美的key值，实在没有的情况下，我们可以有index去代替，但这样子的性能会偏低。这点在实际应用中应该注意。
*/
