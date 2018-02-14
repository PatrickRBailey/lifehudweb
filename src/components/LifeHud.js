import React from 'react';
import Header from './Header';
import Footer from './Footer';
import HudMode from './HudMode';
import EditMode from './EditMode';

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
        {this.state.page === 'HUD' && <HudMode />}
        {this.state.page === 'EDIT' && <EditMode />}
      <Footer 
        page={this.state.page} 
        handleModeSwitch={this.handleModeSwitch}
      />
    </div>
  );
  }
}
 
export default LifeHud;