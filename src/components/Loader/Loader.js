import { Component } from 'react';
import Loader from 'react-loader-spinner';
import LoaderStl from './Loader.module.css';

export default class App extends Component {
  //other logic
  render() {
    return (
      <div className={LoaderStl.Container}>
        <Loader
          type="Puff"
          color="#0F7A8F"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </div>
    );
  }
}
