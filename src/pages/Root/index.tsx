import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import App from '@pages/Home';
import SignIn from '@pages/SignIn';
import SignUp from '@pages/SignUp';

const Root = () => (
  <Router basename="mydocs">
    <Routes>
      <Route index element={<App />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  </Router>
);

export default Root;
