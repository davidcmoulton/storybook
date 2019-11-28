import behavioralButton from './behavioral-button.twig';

export default {
  title: 'Atoms|Inline/Behavioral button',
};

export const Specimen = () => behavioralButton(
  {
    attributes: {
      'data-message': 'It worked!',
    },
    text: 'Press to log to console',
  },
);
