import React from 'react';
import Header from './Header';
import Footer from './Footer';

class LifeHud extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      page: 'HUD'
     }
  }

  handleModeSwitch = () => {
    this.setState((prevState) => ({
      page: prevState.page === 'HUD'? 'EDIT': 'HUD'
    }));
  };

  render() { 
    return ( 
    <div>
      <Header />
      <Footer 
        page={this.state.page} 
        handleModeSwitch={this.handleModeSwitch}
      />
    </div>
  );
  }
}
 
export default LifeHud;