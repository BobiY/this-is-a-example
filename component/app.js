import React,{ Component } from "react";
import { render } from "react-dom";
import "../index.css";

class Li extends Component {
  constructor(props) {
    super();
  }
  render(){
    const { name,price,stocked } = this.props.value;
    return (
      <li>
         <span className = {stocked?"":"red"}>{name}</span>
         <span>{price}</span>
      </li>
    )
  }
}
class App extends Component {
  constructor(props) {
    super();
    this.state = {
      date:[
            {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
            {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
            {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
            {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
            {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
            {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
          ],
      tempDate:[],
      value:"",
      checked:false
    }
  }
  renderList(){
    let arrList = [];
    let category = "";
    this.state.tempDate.forEach( (val,index) => {
      if(val.category !== category){
          category = val.category;
          arrList.push(<li key = {category}>{category}</li>)
      }
         arrList.push(<Li key = {index} value = {val} />)
    } )

    return arrList;
  }
  componentWillMount(){
    this.setState({
      tempDate:this.state.date
    })
  }
  handleChange(e){
    const value = this.refs.value.value;
    const checked = this.refs.checked.checked;
    this.setState({
      value,checked
    });
    let arr =this.state.date.filter( (val,index) => {
          if(  val.name.indexOf(value) === -1 ||  (checked && !val.stocked)){
              return false;
          }
          return true;
    } );
    this.setState({
      tempDate:arr
    })
  }
  render(){
    return(
      <div className = "box">
         <p><input type = "text" value = {this.state.value} onChange = {this.handleChange.bind(this)} ref = "value"/></p>
         <p><input type = "checkbox" value = {this.state.checked} onChange = {this.handleChange.bind(this)} ref = "checked"/>{"只显示有货的商品"}</p>
         <ul>
            <li>
                <b>Name</b>
                <b>Price</b>
            </li>
            {this.renderList()}
         </ul>
      </div>
    )
  }
}

render(<App />,document.getElementById('app'));
