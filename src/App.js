// import './App.css';

import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
import MyHeader from './MyHeader';
import Counter from './Counter';
import Container from './Container';
//import MyFooter from './MyFooter';

function App() {
  let name = "도연";

  const style = {
    App : {
      backgroundColor : "white",
    },
    h2 : {
      color : "red",
    },
    bold_text : {
      color : "green",
    }
  };

  // const func = () => {
  //   return "func";
  // };

  //const number = 5;

  // 따로 빼서 쓸 수 있음
  const counterProps = {
    a : 1,
    b : 2, 
    c : 3,
  }

  return (
    <Container>
      <div style={style.App}>
    
        <MyHeader/>
        <Counter {...counterProps}/>
        {/* => spread 방식으로 처리 할 수 있다. */}
      

        {/* <h2 style={style.h2}>안녕 리액트 {name} {func()}</h2>
        <b id='bold_text' style={style.bold_text}>
          {number}는 : {number % 2 === 0 ? "짝수" : "홀수"}
        </b> */}
      
      </div>
    </Container>
  
  
  );
}

export default App;
// export default는 하나만 내보낼 수 있다.

// {} 안에 숫자나 문자가 아닌것을 넣으면 render가 안됨
// 예) 배열, false 같은 불리언 등 넣으면 안됨
// [조건부 랜더링]
// {number}는 : {number % 2 === 0 ? "짝수" : "홀수"}
// [상태 : state]
// ex) App 컴포넌트 : theme 등  

// [Props : 프로퍼티의 줄임말]
// 초기 값으로 정해 놓는 것
// 자식 컴포넌트에게 정적인 데이터 이외에도 동적인 데이터를 전달할 수 있다.
// 동적인 데이터 ? - 대표적인 동적 데이터는 state 이다.