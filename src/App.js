// import './App.css';

import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
import MyHeader from './MyHeader';
import Counter from './Counter';
//import MyFooter from './MyFooter';

function App() {
  let name = "도연";

  const style = {
    App : {
      backgroundColor : "beige",
    },
    h2 : {
      color : "red",
    },
    bold_text : {
      color : "green",
    }
  };

  const func = () => {
    return "func";
  };

  const number = 5;

  return (
  <div style={style.App}>
      <MyHeader/>
      <Counter/>
      
      {/* <h2 style={style.h2}>안녕 리액트 {name} {func()}</h2>
      <b id='bold_text' style={style.bold_text}>
        {number}는 : {number % 2 === 0 ? "짝수" : "홀수"}
      </b> */}
      
    </div>
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