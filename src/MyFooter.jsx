const MyFooter = () => {
  return <footer>myfooter</footer>
};

export default MyFooter;

// 닫는 태그 반드시 있어야 한다.
// 최상위 태그 존재 해야함 

// [최상위 태그를 원하지 않는다면]
// 1. import React를 해준뒤
// 2. React.Fragment로 최상위 태그로 두고싶지 않은 부분을 감싸주면 된다.
// 3. React.Fragment 쓰기 귀찮으면 그냥 빈 태그를 만들어줘도 된다.