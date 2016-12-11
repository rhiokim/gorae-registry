import React from 'react';
import classNames from 'classnames';
import {Layout, Content} from 'react-mdl';

import HeaderBarSimple from '../components/HeaderBarSimple';
import FooterBarSimple from '../components/FooterBarSimple';
import SideBar from '../components/SideBar';

export default class Dashboard extends React.Component {
  render() {
    const props = this.props;

    return (
      <Layout fixedDrawer={false} className={classNames('mdl-demo', 'mdl-base')}>
        <HeaderBarSimple />
        <SideBar />
        <Content className="mdl-color-text--grey-600 mdl-color--grey-50">
          {props.children}
          <FooterBarSimple />
        </Content>
      </Layout>
    );
  }
}
