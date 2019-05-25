import React, { Component } from 'react';
import Mainpagewrapper from './Mainpagewrapper/Mainpagewrapper';
import SideMenu from './SideMenu/SideMenu';
import PageContentWrapper from './PageContentWrapper/PageContentWrapper';
import MainMenu from './MainMenu/MainMenu';
import MainBodyContentWrapper from './MainBodyContentWrapper/MainBodyContentWrapper';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideMenu: false
    };
    this.toggleMenuHandler = this.toggleMenuHandler.bind(this);
  }
  //   state = {
  //     showSideMenu: false
  //   };
  toggleMenuHandler() {
    this.setState({ showSideMenu: !this.state.showSideMenu });
  }
  render() {
    return (
      <React.Fragment>
        <Mainpagewrapper toggleClass={this.state.showSideMenu}>
          <SideMenu />
          <PageContentWrapper>
            <MainMenu toggleSideMenu={this.toggleMenuHandler} />
            <MainBodyContentWrapper>
              {this.props.children}
            </MainBodyContentWrapper>
          </PageContentWrapper>
        </Mainpagewrapper>
      </React.Fragment>
    );
  }
}

export default Layout;
