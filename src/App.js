import React from "react";


const number = [ //Dynamic data 
    {
    id:1,
    count: "1",
    img: "https://images.unsplash.com/photo-1621440318464-72633426377b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1494&q=80"
    },
    {
      id:2,
      count: "2",
      img:"https://images.unsplash.com/photo-1559757742-654d5da2eaab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
    },
    {
      id:3,
      count: "3",
      img:"https://images.unsplash.com/photo-1572324755260-ec8c3e7fae29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=474&q=80"
    },
    {
      id:4,
      count: "4",
      img:"https://images.unsplash.com/photo-1567761520276-ec3706f5a368?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
    },
    {
      id:5,
      count: "5",
      img:"https://images.unsplash.com/photo-1520865649274-dfc80824ab25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
    },
    {
      id:6,
      count: "6",
      img:"https://images.unsplash.com/photo-1484335629320-0e089b87a106?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1258&q=80"
    }
];

function First({ count, img }){
  return(
    <div>
      <h4>wow! { count }</h4>
       {/* props === object 형태로서 argument로 넘어옴 => { propname } 형태로 작성하여 object 내부의 값을 바로 할당함 ( props.propname === {propname})
       component에 정보(attribute 형태)를 보낼 때, component의 argument로서 props를 넣는다. */}
       <img src = {img} alt = {count}/>
    </div>
  );
}

function renderNumber(num) {
   return <First key = {num.id} count = {num.count} img = {num.img}></First>
  //  component에 props value를 넘긴 후 return 
  //  React component는 내부적으로 key property를 가져야 함, key prop을 하나 부여해주자 
}


function App() {
  return (
    <div className="App">
    {number.map(renderNumber)}
    {/* map 함수를 사용하여 number Array의 각 item에 대하여 renderNumber 함수를 실행 */}
   </div>
  );
}

export default App;
