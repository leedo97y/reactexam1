import React, { useState } from "react";
import OddEvenResult from "./OddEvenResult";

const Counter = ({initialValue}) => {
  // 0에서 출발
  // 1씩 증가하고
  // 1씩 감소하는 
  // state 상태

    const [count, setCount] = useState(initialValue);

    const onIncrease = () => {
      setCount(count + 1);
    };

    const onDecrease = () => {
      setCount(count - 1);
    };

    // const [count2, setCount2] = useState(0);

    // const onIncrease2 = () => {
    //   setCount2(count2 + 1);
    // };

    // const onDecrease2 = () => {
    //   setCount2(count2 - 1);
    // };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <OddEvenResult count={count}/>

      {/* <h2>{count2}</h2>
      <button onClick={onIncrease2}>+</button>
      <button onClick={onDecrease2}>-</button> */}
    </div>
  );
};

Counter.defaultProps = {
  initialValue : 0,
};
// [Counter.defaultProps]
// initialValue를 전달받지 못했을때, 이를 지정해줘서 해결할 수 있음.

export default Counter;

// state를 이용하면 매우 유연한 웹사이트를 만들 수 있다.
// => 코드가 매우 짧음