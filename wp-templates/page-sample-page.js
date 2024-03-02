import { gql } from "@apollo/client";

// The Component is required
export default function Component(props) {
  return (
    <>
      <h2>{props.data.page.title}</h2>
      <h3>This is a custom template from Faust.js</h3>
      <div dangerouslySetInnerHTML={{ __html: props.data.page.content }} />
    </>
  );
}

Component.query = gql`
  query GetPageDataByURI($uri: ID!) {
    page(id: $uri, idType: URI) {
      title
      content
      slug
    }
  }
`;

Component.variables = (seedQuery, context) => {
  return {
    uri: seedQuery?.uri,
  };
};
