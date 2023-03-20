import { render } from 'preact';
import { App } from './app';

render(
  <App />,
  document.getElementById('calculator-widget-holder') as HTMLElement
);
