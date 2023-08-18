import { useState } from 'react';
import SignUpForm from './components/SignUpForm';
import Authenticate from './components/Authenticate';

export default function App() {
  const [token, setToken] = useState(null);
  return (
    <div>
      <SignUpForm setToken={setToken} /> {/* Pass setToken as a prop */}
      {token && <Authenticate token={token} />}
    </div>
  );
}


// https://64dec8729e30173768d05ab5--silver-sunflower-5c548c.netlify.app