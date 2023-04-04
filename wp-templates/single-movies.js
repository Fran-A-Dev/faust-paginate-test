import { gql } from "@apollo/client";

export default function SingleMovie(props) {
  const { title, content } = props.data.nodeByUri;

  return (
    <>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </>
  );
}

SingleMovie.variables = ({ uri }) => {
  return { uri };
};

SingleMovie.query = gql`
  query GetMovieByUri($uri: String!) {
    nodeByUri(uri: $uri) {
      ... on NodeWithTitle {
        title
      }
      ... on NodeWithContentEditor {
        content
      }
    }
  }
`;
