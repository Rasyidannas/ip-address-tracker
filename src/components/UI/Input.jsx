import { forwardRef } from "react";

//this React.forwardRef for make useref in this custom component work
const Input = forwardRef((props, ref) => {
  return (
    <div className={props.className}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
