import * as React from 'react';

export interface GroupsProps {
}

class Groups extends React.Component<GroupsProps, {}> {
  render() {
    return (
      <div className="container">
        <p>This is the Groups component</p>
      </div>
    );
  }
}

export default Groups;