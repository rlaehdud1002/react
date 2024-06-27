import { useEffect } from "react";

const Even = () => {
  // 언마운트
  useEffect(() => {
    // 클린업, 정리함수
    // useEffect가 리턴하는 함수
    return () => {
      console.log("unMount");
    };
  }, []);
  return <div>짝수입니다.</div>;
};

export default Even;
