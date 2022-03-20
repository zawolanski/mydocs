import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

const App = (): JSX.Element => {
  const [t] = useTranslation('content');
  const navigation = useNavigate();

  useEffect(() => {
    navigation('/signin');
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          {t('learn')}
        </a>
        <Link to="/signin">Sign in</Link>
        <br />
        <Link to="/signup">Sign up</Link>
      </header>
    </div>
  );
};

export default App;
