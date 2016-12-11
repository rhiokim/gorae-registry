import React from 'react';
import {
  Header, HeaderRow, FABButton, Icon, HeaderTabs, Tab
} from 'react-mdl';
import {getColorClass, getTextColorClass} from 'react-mdl/lib/utils/palette';

export default class HeaderBar extends React.Component {
  constructor() {
    super();

    this.state = {
      activeHeaderTab: 0
    }
  }

  onChangeHeaderTab() {}

  render() {
    return (
      <Header className={getColorClass('primary')} title="Gorae Registry" scroll>
        <HeaderRow className="mdl-layout--large-screen-only" />
        <HeaderRow className="mdl-layout--large-screen-only">
          <h3>Gorae Registry</h3>
        </HeaderRow>
        <HeaderRow className="mdl-layout--large-screen-only" />
        <HeaderTabs className={getTextColorClass('primary-dark')} activeTab={this.state.activeHeaderTab} onChange={this.onChangeHeaderTab} ripple>
          <Tab>Overview</Tab>
          <Tab>Features</Tab>
          <Tab>Details</Tab>
          <Tab>Technology</Tab>
          <Tab>FAQ</Tab>
          <FABButton ripple colored accent className="mdl-shadow--4dp" id="add">
            <Icon name="add" />
            <span className="visuallyhidden">Add</span>
          </FABButton>
        </HeaderTabs>
      </Header>
    );
  }
}
