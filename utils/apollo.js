// utils/apollo.js
import { getApolloClient } from "@wpengine/headless";
import { getSession } from "next-auth/client";

export const getApolloAuthClient = async (ctx) => {
  const session = await getSession(ctx);

  return getApolloClient({
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,
    },
  });
};
