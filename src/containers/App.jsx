/* global pkginfo */
import React from 'react';
import Helmet from 'react-helmet';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalUserCount: 0
    };
  }

  render() {
    const props = this.props;

    return (
      <div>
        <Helmet
          title={pkginfo.name}
          titleTemplate=" %s | Gorae Swarm"
          meta={[
            {name: 'description', content: pkginfo.description},
            {name: 'version', content: pkginfo.version},
            {name: 'product', content: pkginfo.name},
            {name: 'keywords', content: pkginfo.keywords},
            {name: 'author', content: pkginfo.author},
            {name: 'license', content: pkginfo.license},
            {name: 'sha', content: pkginfo.sha}
          ]} />
        {props.children}
        {
          // (() => {
          //   if (process.env.NODE_ENV === 'development') {
          //     const DevTools = require('../DevTools').default;
          //     return <DevTools />;
          //   }
          // })()
        }
      </div>
    );
  }
}
