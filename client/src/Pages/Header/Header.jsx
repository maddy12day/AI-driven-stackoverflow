import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <button>
        <Link to='/home/post'>Forward to post</Link>
      </button>
    </div>
  );
}

export default Header;
