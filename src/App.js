import React from 'react';
import './App.css';
import data from './data.json'


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      count:30,
      mobile:false,
      add:0,
      prevData: null,
      nextData:null,
      data:[],

    }
  }
  componentDidMount(){
    this.setState({
      data:data
    })
    this.open();
  }

  countBack =()=>{
     
     this.setState((prevState, {count}) =>({
        count: prevState.count - 1
     }))
   }
   countFoward =()=>{
     this.setState((prevState,{count})=>({
       count:prevState.count + 1
     }))
   }
   handleNext =(id)=>{
    const {data} = this.state
    this.setState({
      prevData: data.id + 1
    })
   }
  handlePrev =(id)=>{
    const {data} = this.state
    this.setState({
      prevData: data.id -1
    })
   }

   add =(e) => {
     this.setState(({add})=>({
       add:add+1
     }))
   }
   open =() =>{
     this.setState({
       mobile :!this.state.mobile
     })
     
   }
  render(){
    console.log(data.list2)
    const {count,add,mobile} = this.state 
    if (mobile == false) {
      return (<div className="App">
      <div className="header">
      <h1>React Click Events</h1>
      </div>

      <div className="add">
      <p>Counting forward on a button click</p>
        <button onClick={this.add}>Count</button>
          <br/>
          <span>{add}</span>
      </div>

      <div className="PrevNext">
      <p>Counting backward and forward on a respective button click</p>
        <button onClick = {this.countBack}>Backward</button>
        <button onClick = {this.countFoward}>Forward</button>
        <br/>
        <span>{count}</span>
      </div>

      <div className="boolean">
        <p>Boolean</p>
        <button onClick={this.open} className="false">Inactive</button>
      </div>

      <div className="pagination">
        <p>Data navigation</p>
        <button onClick={this.handlePrev}>Prev</button>
        <button onClick={this.handleNext}>Next</button>
        <div className="content">
          <h2>{data[0].title}</h2>
          <ul> 
          {
            this.state.data.map((d) =>{
              return <li key={d.id}>{d.list1} <br/></li>
            })
          }
          </ul>
        </div>
        </div>
        
      </div>
      )
    } 
    
    else {
      return  (
        <div className="App">
        <div className="header">
          <h1>React Click Events</h1>
        </div>

        <div className="add">
          <p>Counting forward on a button click</p>
          <button onClick={this.add}>Count</button>
            <br/>
          <span>{add}</span>
        </div>

        <div className="PrevNext">
          <p>Counting backward and forward on a respectivebutton click</p>
          <button onClick = {this.countBack}>Backward</button>
          <button onClick = {this.countFoward}>Forward</button>
          <br/>
          <span>{count}</span>
        </div>

        <div className="boolean">
          <p>Boolean</p>
          <button onClick={this.open} className="true">Active</button>
        </div>

        <div className="pagination">
          <p>Data navigation</p>
          <button onClick={this.handlePrev}>Prev</button>
          <button onClick={this.handleNext}>Next</button>
       ` `<div className="content">
            <h2>{data[0].title}</h2>
            <ul> 
            {
              this.state.data.map((d) =>{
                return <li key={d.id}>{d[0]}</li>
              })
            }
            </ul>
          </div>
        </div>
      </div>
    )};
  }
};

export default App;
