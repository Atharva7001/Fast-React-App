import { Link } from 'react-router';
import SearchOrder from '../orders/SearchOrder';
import Username from '../user/Username';

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-yellow-500 bg-yellow-400 px-2 py-2 uppercase">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}
