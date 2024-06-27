import "./App.css";

import HookExam from "./components/HookExam";

function App() {
  // useState의 첫 번째 인수는 초기값
  // 두 번째 인수는 초기값을 변화시키는 함수
  // 보통 구조분해할당을 통해 받음
  // useState를 사용하지 않고 let을 통해 값을 할당하면 리렌더링 되지 않기 때문에 State 사용해야 함

  return (
    <>
      <HookExam />
    </>
  );
}

export default App;
