import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page">
      <h1>Welcome to Home Page</h1>
      <p>
        <Link to="/login">Go to Login</Link>
      </p>
    </div>
  );
}

export default Home;