import App from '@pages/Home/App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Root = () => (
  <Router basename="mydocs">
    <Routes>
      <Route index element={<App />} />
    </Routes>
  </Router>
);

export default Root;
