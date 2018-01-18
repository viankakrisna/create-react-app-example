require('./index.css');
require('slick-carousel/slick/slick-theme.css');
const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./App').default;
const Slider = require('react-slick');
const registerServiceWorker = require('./registerServiceWorker').default;
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
