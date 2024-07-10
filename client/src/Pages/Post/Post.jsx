import {useDispatch } from 'react-redux'
import { useNavigate } from 'react-router';
import { clearUserData } from '../../Store/userSlice'
const Post = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const handleClick = () =>{
   dispatch(clearUserData())
   navigate('/');
  }
  return (
    <div><button onClick={handleClick}>Post</button></div>
  )
}

export default Post