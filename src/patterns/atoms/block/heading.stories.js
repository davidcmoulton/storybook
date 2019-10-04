import heading from './heading.twig';

export default {
  title: 'Atoms|Block/Heading',
};

export const h1 = () => heading(
  {
    level: 1,
    text: 'A level 1 heading',
  },
);

export const h1Linked = () => heading(
  {
    level: 1,
    text: {
      text: 'A linked H1 heading',
      link: {
        attributes: {
          href: '#',
        },
      },
    },
  },
);

export const h2 = () => heading(
  {
    level: 2,
    text: 'A level 2 heading',
  },
);
