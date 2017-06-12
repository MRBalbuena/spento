import * as React from 'react';

export interface ConfigProps {
}

class Config extends React.Component<ConfigProps, {}> {
  render() {
    return (
      <div className="container">
        <p>This is the Config Component</p>
      </div>
    );
  }
}

export default Config;