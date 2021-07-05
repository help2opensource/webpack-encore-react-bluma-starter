import React from 'react';
import ReactDOM from 'react-dom';

class Test extends React.Component {
  render() {
    return <div className='notification is-primary'>Hello World!</div>;
  }
}

ReactDOM.render(<Test />, document.getElementById('root'));