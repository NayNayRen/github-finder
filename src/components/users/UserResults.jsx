import { useEffect, useState } from 'react';
import Spinner from '../layout/Spinner';

function UserResults() {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchUsers();
  }, []);
  const url = 'https://api.github.com';
  const fetchUsers = async () => {
    const response = await fetch(`${url}/users`);
    const data = await response.json();
    setUsers(data);
    setLoading(false);
  };
  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <h3>{user.login}</h3>
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;

// useEffect is brought in to make it work right when page loads
//  useEffect takes in a callback function() and an array of dependencies[]
// fetchUsers async/await function is used to get data from the api
// fetchUsers is then passed to useEffect to be called on page load
// add import of useState to get the user's data
// any time you call from an api you should have some sort of loader until the data arrives
// map the users state in the return to display
// wrap the return in an if/else block to catch if it's loading or not
