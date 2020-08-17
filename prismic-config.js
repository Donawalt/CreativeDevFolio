import Prismic from 'prismic-javascript'

export const apiEndpoint = "https://creativefolio.cdn.prismic.io/api/v2";

export const Client = Prismic.client(apiEndpoint);

export const linkResolver = (doc) => {
  if (doc.type === 'portfolio_post') return `/portfolio/${doc.uid}`;
  if (doc.type === 'portfolio_home') return '/portfolio';
  if (doc.type === 'about') return '/about';
  return '/';
};
