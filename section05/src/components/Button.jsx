// 객체가 아닌 구조분해 할당으로 바로 받을 수도 있음
const Button = ({ text, color, children }) => {
    // e : 이벤트 객체
  const onClickButton = (e) => {
    console.log(e)
    console.log(text);
  };
  return (
    <button
      onClick={onClickButton}
    //   onMouseEnter={onClickButton}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

// props 기본값 설정
Button.defaultProps = {
  color: "black",
};

export default Button;
