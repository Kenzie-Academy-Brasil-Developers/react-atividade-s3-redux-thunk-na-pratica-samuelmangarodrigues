import { useSelector } from "react-redux";
import "./style.css";

const Display = () => {
  const selector = useSelector((store) => store.user);
  return (
    <div>
      <h1>Kenzie Comments</h1>
      <h2>
        {selector.comments.map((coment) => (
          <div className="Comments">{coment}</div>
        ))}
      </h2>
    </div>
  );
};
export default Display;
