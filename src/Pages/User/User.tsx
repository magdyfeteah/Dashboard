import "./user.scss";
import Single from "../Single/Single";
import { singleUser } from "../../data";
function User() {
  return (
    <div className="user">
      <Single {...singleUser} />
    </div>
  );
}

export default User;
