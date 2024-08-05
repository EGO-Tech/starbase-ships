import _ from 'lodash';

const getChild = (node, query) => node && _.find(node.children, query);

const getChildValue = (node, query) => getChild(node, query).value;

export const getTitle = (mdast) =>
  getChildValue(_.find(mdast.children, { type: 'heading', depth: 1 }));

export const getSection = (mdast, value) => {
  const heading = _.find(
    mdast.children,
    ({ type, depth, children }) =>
      type === 'heading' && depth === 2 && _.some(children, { value }),
  );
  if (!heading) return;
  const index = mdast.children.indexOf(heading);
  return mdast.children[index + 1];
};

export const getShipName = (mdast) =>
  getTitle(mdast).replace(/ by EGOTech/, '');

export const getLink = (link) =>
  link && {
    text: link.children[0].value,
    url: link.url,
  };

export const getShipLink = (mdast, text) =>
  getLink(
    getChild(
      _.find(
        mdast.children,
        ({ type, children }) =>
          type === 'paragraph' &&
          _.some(
            children,
            (link) => link.type === 'link' && getLink(link).text === text,
          ),
      ),
    ),
  );
