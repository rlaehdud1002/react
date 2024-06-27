// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

import { useState, useRef } from "react";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  // ref는 리렌더링 하지 않음
  const countRef = useRef(0);
  const inputRef = useRef();

  // 아래 코드를 하나로 이렇게 쓸 수 있음
  // 중복 제거
  const onChange = (e) => {
    countRef.current++;
    console.log(countRef);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      // 이름을 입력하는 DOM 요소 포커스
      inputRef.current.focus();
    }
  };

  //   console.log(input);

  //   const onChangeName = (e) => {
  //     setInput({
  //       // name이 아닌 다른 값들은 그대로
  //       ...input,
  //       name: e.target.value,
  //     });
  //   };

  //   const onChangeBirth = (e) => {
  //     setInput({
  //       ...input,
  //       birth: e.target.value,
  //     });
  //   };

  //   const onChangeCountry = (e) => {
  //     setInput({
  //       ...input,
  //       country: e.target.value,
  //     });
  //   };

  //   const onChangeBio = (e) => {
  //     setInput({
  //       ...input,
  //       bio: e.target.value,
  //     });
  //   };

  return (
    <div>
      <div>
        {/* 초기값이 있으면 value값 사용 */}
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
      </div>

      <div>
        <input
          name="birth"
          type="date"
          value={input.birth}
          onChange={onChange}
        />
      </div>

      <div>
        {/* 제일 위의 옵션이 초기값으로 설정됨 */}
        <select name="country" onChange={onChange} value={input.country}>
          {/* value값으로 country에 저장됨 */}
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>

      <div>
        <textarea name="bio" onChange={onChange} value={input.bio} />
      </div>

      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
