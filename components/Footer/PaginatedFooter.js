import Link from "next/link";

export default function PaginatedFooter({ post }) {
  const { previousPost, nextPost } = post;
  return (
    <>
      <footer style={{ display: "flex", textAlign: "center" }}>
        {previousPost ? (
          <div
            style={{
              border: "2px solid #ddd",
              padding: "1rem",
            }}
          >
            <Link href={`${previousPost.slug}`}>
              <a>👈 {previousPost.title}</a>
            </Link>
          </div>
        ) : null}
        {nextPost ? (
          <div
            style={{
              border: "2px solid #ddd",
              padding: "1rem",
              marginLeft: "1rem",
            }}
          >
            <Link href={`${nextPost.slug}`}>
              <a>{nextPost.title} 👉</a>
            </Link>
          </div>
        ) : null}
      </footer>
    </>
  );
}

// export async function getStaticPaths() {
//   const slugs = await getPostSlugs();
//   const paths = slugs.map((slug) => {
//     return { params: { slug } };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// }

// async function getPostSlugs() {
//   const { data } = await client.query({
//     query: gql`
//       query getPosts {
//         posts(first: 10) {
//           nodes {
//             slug
//           }
//         }
//       }
//     `,
//   });

//   return data.posts.nodes.map((node) => node.slug);
// }

// const GET_POST = gql`
//   query getPost($slug: ID!) {
//     post(id: $slug, idType: SLUG) {
//       databaseId
//       title
//       content
//       slug
//       previousPost {
//         title
//         slug
//       }
//       nextPost {
//         title
//         slug
//       }
//     }
//   }
// `;

// export async function getStaticProps(context) {
//   const { data } = await client.query({
//     query: GET_POST,
//     variables: {
//       slug: context.params.slug,
//     },
//   });

//   return {
//     props: {
//       post: data.post,
//     },
//   };
// }
