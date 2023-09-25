import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
function Detail() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  const getMovie = async (id) => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
  };

  useEffect(() => {
    getMovie(id);
  }, [id]);
  console.log(movie);
  return <h1>Detail - {id}</h1>;
}

export default Detail;
