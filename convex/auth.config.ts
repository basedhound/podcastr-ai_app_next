// https://docs.convex.dev/auth/clerk
// https://dashboard.clerk.com -> JWT Templates -> Convex

const authConfig = {
  providers: [
    {
      domain: "https://mature-anemone-25.clerk.accounts.dev",
      applicationID: "convex",
    },
  ]
};

export default authConfig;