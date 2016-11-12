import React from 'react';

function Button (props = {}) {

  const { className, icon } = props;

  let { children } = props;

  let cls = 'mybutton';

  if (className) {
    cls += ` ${className}`;
  }

  if (icon) {
    children = (
      <i className='myicon' />
    );
  }

  return (
    <button className={cls}>
      {children}
    </button>
  );
}

export default Button;
