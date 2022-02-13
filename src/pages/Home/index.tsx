import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Button from '@components/Button';

const App = (): JSX.Element => {
  const [t] = useTranslation('content');

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('learn')}
        </a>
        <Button />
        <Link to="/signin">Sign in</Link>
        <br />
        <Link to="/signup">Sign up</Link>
      </header>
    </div>
  );
};

export default App;
