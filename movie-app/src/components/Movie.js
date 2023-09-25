import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ coverImg, title, summary, genres }) {
  return (
    <div>
      <h1>
        <img src={coverImg} alt={`${title} movie post`} title={title} />
      </h1>
      <h2>
        <Link to="movie">{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres?.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string),
};

export default Movie;
