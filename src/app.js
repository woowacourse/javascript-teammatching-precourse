import Header from './components/header.js';

export default function App() {
  this.header = new Header();

  this.render = () => {
    this.header.render();
  };
}
