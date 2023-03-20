import { render } from 'preact';
import { App } from './app';

render(
  <App />,
  document.getElementById('contact-widget-holder') as HTMLElement
);
