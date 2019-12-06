export default class BehavioralButton {

  constructor(rootElement, _window = window) {
    const message = rootElement.dataset.message || '*** No message found :-( ***';
    rootElement.addEventListener('click', () => _window.console.log(message));
  }

}
