import { gql } from "@apollo/client";

export default function SingleMovie(props) {
  if (props.loading) {
    return <>Loading...</>;
  }
  const { movieTitle, runningTime, synopsis, movieQuote } =
    props.data.movie.movieFields;

  return (
    <div>
      <header>
        <h2>Movie: {movieTitle}</h2>
      </header>
      <main>
        <section>
          Runtime:
          <p>{runningTime}</p>
        </section>

        <section>
          <h2>Synopsis:</h2>
          <p>{synopsis}</p>
        </section>

        <section>
          <div>
            <h2>Quote-Able:{movieQuote}</h2>
          </div>
          <img
            src={props.data.movie.movieFields.movieImage.node.sourceUrl}
          ></img>
        </section>
      </main>
    </div>
  );
}

SingleMovie.variables = ({ databaseId }, ctx) => {
  return { id: databaseId, asPreview: ctx?.asPreview };
};

SingleMovie.query = gql`
  query GetMovie($id: ID!, $asPreview: Boolean!) {
    movie(id: $id, asPreview: $asPreview, idType: DATABASE_ID) {
      movieFields {
        movieTitle
        runningTime
        synopsis
        movieQuote
        movieImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;
