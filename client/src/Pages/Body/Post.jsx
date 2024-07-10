import { useDispatch } from "react-redux";
import { clearUserData } from "../../Store/userSlice";
import { useNavigate } from "react-router";

const Post = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () =>{
    sessionStorage.removeItem('user');
    dispatch(clearUserData());
    navigate('/')
  }
  return (
    <div>
      <h1>Post Page</h1>
      <p>This is the Post page.</p>
      <button onClick={handleLogout}>LogOut</button>
    </div>
  )
}

export default Post