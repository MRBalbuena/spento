import * as React from 'react';

export interface MovementsProps {
}

class Movements extends React.Component<MovementsProps, {}> {
  render() {
    return (
      <div className="container">
        <p>This is the Container Component </p>
      </div>
    );
  }
}

export default Movements;