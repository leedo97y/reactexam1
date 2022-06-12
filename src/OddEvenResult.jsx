const OddEvenResult = ({count}) => {
  return (
    <>{count % 2 === 0 ? "짝수" : "홀수"}</>
  );
};

export default OddEvenResult;

// 부모가 내려주는 props가 변경되면 다시 render 해옴
// => 1. react의 컴포넌트는 본인이 관리하고 본인이 가진 state가 바뀔때마다 rerender 된다.
// => 2. 나에게 내려온 props가 바뀔때마다 rerender 된다.
// => 3. 위의 두 상황이 아니더라도 부모 요소가 rerender 되면 그냥 rerender 된다.