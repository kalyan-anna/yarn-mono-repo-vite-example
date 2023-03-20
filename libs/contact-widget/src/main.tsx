import { render } from 'preact';
import { App } from './lib/App';

render(
  <App />,
  document.getElementById('contact-widget-holder') as HTMLElement
);
