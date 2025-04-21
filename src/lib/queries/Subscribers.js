// lib/queries/subscriber.js

export const getSubscribersQuery = `*[_type == "subscriber"]{
    email,
    createdAt
  }`;
  