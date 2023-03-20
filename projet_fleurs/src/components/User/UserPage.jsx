import { Link, useParams } from 'react-router-dom';

const User = () => {
  const { id } = useParams();
  return (
    <section>
      <h1>{id}</h1>;<Link to="/">Back to home</Link>;
    </section>
  );
};

export default User;
