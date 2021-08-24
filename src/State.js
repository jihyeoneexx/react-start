import React from "react";

class App extends React.Component{
    // React의 Component로부터 확장된 App Class를 형성 === React Component의 속성을 상속
    state = {
        count: 0
    };
    // Class component에서 사용 가능한 Dynamic data 저장소
    add = () => {
        this.setState(currunt => ({ count : currunt.count + 1 }));
        // setState === 호출할 때마다 React는 새로운 state와 render() 를 호출한다. // React에서 State의 상태는 직접 재정의할 수 없다. setState를 사용해야함! 
        // currunt 함수 === 현재 state 값을 바로 가져올 수 있는 React 내장 함수, this.state.count로 하드코딩 할 필요가 없다! 
    }
    minus = () => {
        this.setState({ count : this.state.count - 1 });
    }
    render(){
        return (
        <div>
            <h1>CLASS component! The number is : {this.state.count}</h1>
            <button onClick={this.add}>ADD</button>
            <button onClick={this.minus}>MINUS</button>
            {/* onClick === React 내장 Prop */}
        </div>
        );
    }
}
  
  export default App;
  