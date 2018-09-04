import React, { Component } from 'react';
import './Switcher.css';

// Для работы этой компоненты использую методы React.Children.toArray
// а так же работаю с child.type.name и child.type.displayName

class Switcher extends Component {
  state = {
    selectedChild: 0
  }

  handleChangeChild = (event) => {
    this.setState({
      selectedChild: Number(event.target.dataset.id)
    });
  };

  render() {
    const {selectedChild} = this.state;
    const {children} = this.props;
    
    return (
      <div className="switcher">
        <nav>
          <ul className="component-list">
            {
              React.Children.map(children, (item, index) => {
                const name = item.type.name;

                return (
                  <li className="component-list__name"
                      data-id={index}
                      key={index}
                      onClick={this.handleChangeChild}>{name}</li>
                )
              })
            }
          </ul>

          <hr/>

          <div className="component-wrapper">
            {
              React.Children.map(children, (item, index) => {
                if (selectedChild === index) {
                  return item;
                }
                else {
                  return null;
                }
              })
            }
          </div> 
        </nav>
      </div>
    )
  }
}

export default Switcher;
