import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import App from '@pages/Home';
import SignIn from '@pages/SignIn';
import SignUp from '@pages/SignUp';
import Documents from '@pages/Documents';
import ForgotPassword from '@pages/ForgotPassword';
import AuthRoute from '@components/Routes/authRoute';
import { theme } from '@/theme/mui';
import { ThemeProvider } from '@mui/material/styles';

const Root = () => (
  <ThemeProvider theme={theme}>
    <Router basename="mydocs">
      <Routes>
        <Route index element={<App />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/documents" element={<AuthRoute />}>
          <Route path="/documents" element={<Documents />} />
        </Route>
      </Routes>
    </Router>
  </ThemeProvider>
);

export default Root;
