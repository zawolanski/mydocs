import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!email || !password) return;

    setLoading(true);

    try {
      const auth = getAuth();
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password);

      const { user } = userCredentials;

      await updateProfile(user, { displayName: `${firstname} ${lastname}` });

      navigate('/documents');
      console.log(user);
      return;
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">
            Email
            <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
        </div>
        <div>
          <label htmlFor="firstname">
            Firstname
            <input id="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
          </label>
        </div>
        <div>
          <label htmlFor="lastname">
            Lastname
            <input id="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
        </div>
        <button type="submit" disabled={isLoading}>
          Sign up
        </button>
        <br />
        <Link to="/signin">Sign in</Link>
      </form>
    </div>
  );
};

export default SignUp;
