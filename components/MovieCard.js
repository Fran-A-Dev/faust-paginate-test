import { gql, useQuery } from "@apollo/client";
import Link from "next/link";

const GET_MOVIES = gql`
  query GET_MOVIES {
    movies {
      nodes {
        ...MovieFragment
      }
    }
    actors {
      nodes {
        ...ActorFragment
      }
    }
  }

  fragment MovieFragment on Movie {
    title
    id
    slug
    uri
  }

  fragment ActorFragment on Actor {
    title
    id
    slug
    uri
  }
`;

function MovieList() {
  const { loading, error, data } = useQuery(GET_MOVIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Movies</h2>
      <ul>
        {data.movies.nodes.map((movie) => (
          <li key={movie.id}>
            <Link href={`${movie.uri}`}>
              <a>{movie.title}</a>
            </Link>
          </li>
        ))}
      </ul>

      <h2>Actors</h2>
      <ul>
        {data.actors.nodes.map((actor) => (
          <li key={actor.id}>
            <Link href={`${actor.uri}`}>
              <a>{actor.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
