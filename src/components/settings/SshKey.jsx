import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import * as Action from '../../actions/sshkey';

class SshKey extends React.Component {
  componentWillMount() {
    this.props.fetchRsaPub()
  }

  render() {
    return <div>
      {this.props.sshkey}
    </div>
  }
}

const mapStateToProps = state => ({
  sshkey: state.sshkeyReducer.key
})

const mapDispatchToProps = dispatch => bindActionCreators(Action, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SshKey)
