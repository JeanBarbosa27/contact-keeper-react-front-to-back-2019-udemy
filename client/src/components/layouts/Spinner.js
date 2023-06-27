import React, { Fragment } from 'react'

import spinner from './spinner.gif'

const spinnerStyle = {
  display: 'block',
  width: '200px',
  margin: 'auto',
}
const Spinner = () => (
  <Fragment>
    <img src={spinner} alt="Loading..." style={spinnerStyle} />
  </Fragment>
);

export default Spinner;
