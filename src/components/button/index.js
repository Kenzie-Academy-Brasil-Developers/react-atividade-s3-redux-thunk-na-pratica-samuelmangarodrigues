import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCommentThunk } from "../../store/modules/users/thunks";

const Button = () => {
  const [inpt, setInput] = useState([]);
  const dispath = useDispatch();
  return (
    <div>
      <input className="inpt" onChange={(e) => setInput(e.target.value)} />
      <button className="btns" onClick={() => dispath(addCommentThunk(inpt))}>
        Novo comentário
      </button>
    </div>
  );
};
export default Button;
