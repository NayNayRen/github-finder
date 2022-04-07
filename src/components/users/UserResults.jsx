import { useContext } from 'react';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';
import GithubContext from '../../context/github/GithubContext';

function UserResults() {
  const { users, loading } = useContext(GithubContext);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
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
