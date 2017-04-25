import {Component} from 'react';
import Header from './header';

export default WrappedComponent => class extends Component {
  render() {
    return (
      <div className="main">
        <Header cart={this.props.cart}/>
        <WrappedComponent {...this.props}/>
        <style jsx>{`
         .main {
           font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
         }
        `}</style>
      </div>
    );
  }
}