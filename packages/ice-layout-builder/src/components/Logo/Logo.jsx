/* eslint object-shorthand: 0 */
import React, { PureComponent } from 'react';

import './scss/dark.scss';
import './scss/light.scss';

export default class Logo extends PureComponent {
  render() {
    const { color, url, width, height, method } = this.props;
    const logoStyle = color ? { color: color } : {};

    return (
      <div className="logo" style={{}}>
        { method === "text" ? <a href="#" className="logo-text" style={{ ...logoStyle }}>
          LOGO
        </a> : null }
        { method === "upload" || method === "link" ?
          <img src={url} width={width} height={height}/>
          : null }
      </div>
    );
  }
}
