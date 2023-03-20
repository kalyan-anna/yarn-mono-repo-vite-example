import { render } from 'preact';
import { App } from './lib/App';

render(
  <App />,
  document.getElementById('calculator-widget-holder') as HTMLElement
);
