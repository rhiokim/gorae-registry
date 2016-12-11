import React, {Component} from 'react';
import {Link} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
import Helmet from 'react-helmet';
import {Layout, Header, Content, Grid, Cell, Icon} from 'react-mdl';
import {getColorClass, getTextColorClass} from 'react-mdl/lib/utils/palette';

import * as Actions from '../../actions/catalog';
import Image from './Image';
import FooterBarSimple from '../FooterBarSimple';

class Images extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentWillMount() {
    this.props.fetchCatalog();
  }

  render() {
    const {repositories} = this.props;
    return (
      <div className={classNames('mdl-demo', 'mdl-base')}>
        <Helmet title="Image List" />
        <Layout className={classNames(getColorClass('grey', 100), getTextColorClass('grey', 700))}>
          <Content component="main">
            <Header className={classNames(getColorClass('grey', 100), getTextColorClass('grey', 800))} title={<span><Link to="dashboard"><Icon name="reply" className="valign-bottom mr-5"/></Link>Image List</span>} scroll />
            <Grid component="section" className="section--center" noSpacing>
              <Cell col={12} tablet={12} phone={12}>
                <div className="row p-5">
                  <div className="col-md-10">
                  </div>
                  <div className="col-md-2">
                    <div className="pull-right" style={{width: '35px'}}>
                    </div>
                  </div>
                </div>
              {repositories && repositories.map((image, i) => {
                return (<Image key={i} name={image} />);
              })}
              </Cell>
            </Grid>
            <FooterBarSimple />
          </Content>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  repositories: state.catalogReducer.repositories
});

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Images);
