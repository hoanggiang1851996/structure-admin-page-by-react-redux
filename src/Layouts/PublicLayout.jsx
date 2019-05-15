import React from 'react';

function PublicLayout(props) {
  const Component = props.component;
  const route = props;
  return (
    <div >
      <Component route={route}/>
    </div>
  );
}

export default PublicLayout;
