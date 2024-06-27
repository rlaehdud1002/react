import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import "./App.css";
import { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  // 1. 마운트 : 탄생
  // deps로 빈배열 전달
  useEffect(() => {
    console.log("mount");
  }, []);

  // 2. 업데이트 : 변화, 리렌더링
  // 배열을 전달해주지 않음
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });

  // 3. 언마운트 : 죽음
  // Even.jsx에 있음

  // // 2번째 인자(의존성 배열, dependency array(deps))가 바뀌면 콜백 함수를 호출
  // useEffect(() => {
  //   console.log(`count: ${count} / input : ${input}`);
  // }, [count, input]);

  const onclickButton = (value) => {
    setCount(count + value);
    // 여기서 출력하면 비동기로 동작하기 때문에 변하기 전의 값이 콘솔에 출력됨
    // console.log(count);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          type="input"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onclickButton={onclickButton} />
      </section>
    </div>
  );
}

export default App;
