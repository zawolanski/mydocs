import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e: React.SyntheticEvent) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      console.log('Email was sent!');
      return;
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  return (
    <div>
      <h3>Forgot password</h3>
      <div>
        <form onSubmit={onSubmit}>
          <label htmlFor="email">
            Email
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br />
          <Link to="/signin">Sign in</Link>
          <br />
          <button type="submit" disabled={isLoading}>
            Send reset link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
