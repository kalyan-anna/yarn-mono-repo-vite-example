import { render } from 'preact';
import { App } from './lib/App';

render(<App />, document.getElementById('footer-widget-holder') as HTMLElement);
