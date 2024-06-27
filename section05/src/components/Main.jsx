// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있음
//     if 문이나 for 문 같은 건 불가
// 2. 숫자, 문자열, 배열 값만 렌더링
//     boolean, undefined, null, 객체 등 불가
// 3. 모든 태그는 닫혀있어야 함
// 4. 최상위 태그는 반드시 하나여야만 함
//     마땅한 최상위 태그가 없으면 빈 태그(<>, </>)여도 됨
//     빈 태그를 최상위 태그로 사용하면 상위 컴포넌트에서 요소들이 흩뿌려져 있음

import "./Main.css"

const Main = () => {
  const user = {
    name: "이정환",
    isLogin: true,
  };

  if (user.isLogin) {
    // class는 자바스크립트 예약어라서 className 사용
    return <div className="logout">로그아웃</div>;
  } else {
    return <div>로그인</div>;
  }

  //   return <>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</>;
};

export default Main;
