import React from 'react';
import {withRouter, Link} from 'react-router';
import {
  ListItem, ListItemContent, IconButton, Menu, MenuItem, ListItemAction
} from 'react-mdl';

export default class Image extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentWillMount() {
  }

  componentWillUnmount() {
    clearTimeout(this.interval);
  }

  render() {
    return (
      <ListItem twoLine>
        <ListItemContent subtitle={''}>
          <Link to={`/dashboard/services/`}>{this.props.name}</Link>
        </ListItemContent>
        <ListItemAction info="">
          <IconButton name="more_vert" id="act" ripple />
          <Menu target="act" align="right" valign="bottom">
            <MenuItem data-action="inspect">Inspect</MenuItem>
            <MenuItem data-action="edit">Edit</MenuItem>
            <MenuItem data-action="stop" disabled>Stop</MenuItem>
            <MenuItem data-action="remove" disabled>Remove</MenuItem>
          </Menu>
        </ListItemAction>
      </ListItem>
    );
  }
}
