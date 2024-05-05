const _ = require('lodash');

const pages = [
  {
    id: 'commissions',
    label: 'Ship Commissions',
    title: 'Ship Commissions',
    slug: 'commissions',
  },
  {
    id: 'rentals',
    label: 'Ship Rentals',
    title: 'Ship Rentals',
    slug: 'rentals',
  },
  { id: 'faq', label: 'FAQ', title: 'Frequently Asked Questions', slug: 'faq' },
];

module.exports = ({ pathPrefix }) => {
  return {
    list: _.map(pages, (page) => {
      page.webPath = `${pathPrefix}pages/${page.slug}`;
      return page;
    }),
  };
};
