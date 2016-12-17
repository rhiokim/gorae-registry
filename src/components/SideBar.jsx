import React from 'react';
import {Link} from 'react-router';
import {Drawer, Navigation, Icon} from 'react-mdl';

import './SideBar.css';

export default class SideBar extends React.Component {
  render() {
    return (
      <Drawer title="Gorae Registry">
        <Navigation>
          <Link to="/dashboard">
            <Icon name="dashboard" /> Dashboard
          </Link>
        </Navigation>
        <Navigation>
          <span>IMAGES</span>
          <Link to="/dashboard/images">
            <Icon name="storage" /> images
          </Link>
        </Navigation>
        <Navigation>
          <span>PIPE</span>
          <Link to="/pipe/github">
            <Icon name="apps" /> github
          </Link>
          <Link to="/pipe/bitbucket">
            <Icon name="event_note" /> bitbucket
          </Link>
          <Link to="/pipe/gitlab">
            <Icon name="event_note" /> gitlab
          </Link>
        </Navigation>
        <Navigation>
          <span>ADMIN</span>
          <Link to="/settings/admin">
            <Icon name="settings" /> admin
          </Link>
          <Link to="/settings/registry">
            <Icon name="settings" /> registry
          </Link>
          <Link to="/settings/sshkey">
            <Icon name="settings" /> ssh-key
          </Link>
        </Navigation>
      </Drawer>
    );
  }
}


