import React, { Component } from 'react';
import './Switcher.css';

// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  render() {
    const children = React.Children.toArray(this.props.children);

    return (
      <div className="switcher">
        <nav>
          <ul className="component-list">
            <li className="component-list__name">{children}</li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Switcher;
