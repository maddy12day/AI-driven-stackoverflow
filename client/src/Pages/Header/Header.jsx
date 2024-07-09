import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <button>
        <Link to='/browse/post'>Post</Link>
      </button>
    </div>
  );
}

export default Header;
