import behavioralButton from './atoms/inline/behavioral-button/behavioral-button';

function flagJsUsage(window) {
  window.document.querySelector('html').classList.add('js');
}

function defineAvailableModules() {
  return {
    'behavioral-button': behavioralButton,
  };
}

function initializeComponent($component, availableModules) {
  const { behavior } = $component.dataset;
  const handlers = behavior.trim().split(' ');
  handlers.forEach((handler) => {
    // eslint-disable-next-line no-prototype-builtins
    if (availableModules.hasOwnProperty(handler)) {
      // eslint-disable-next-line no-new
      new availableModules[handler]($component, window);
    }
  });

  // eslint-disable-next-line no-param-reassign
  $component.dataset.behaviorInitialised = 'true';
}

function initialize(window) {
  const modules = defineAvailableModules();
  const patternsWithBehavior = [...window.document.querySelectorAll('[data-behavior]')];
  patternsWithBehavior.forEach((rootElement) => initializeComponent(rootElement, modules));
  flagJsUsage(window);
}

export default initialize(global.window);
