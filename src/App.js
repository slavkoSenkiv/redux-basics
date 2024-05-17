import Counter from './components/Counter';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import Auth from './components/Auth';
import { useSelector } from 'react-redux';

export default function App() {
  const isAuth = useSelector((state) => state.auth.authenticated);

  return (
    <>
      <Header />
      {isAuth ? (
        <>
          <UserProfile />
          <Counter />
        </>
      ) : (
        <Auth />
      )}
    </>
  );
}
