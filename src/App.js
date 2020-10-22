import React, { Component } from "react";

class App extends Component {
  users = JSON.stringify([{ name: "John Wick" }, { name: "IronMan" }]);

  componentDidMount() {
    this.component.addEventListener("userSelect", this.onUserSelect);
  }

  componentWillUnmount() {
    this.component.removeEventListener("userSelect", this.onUserSelect);
  }

  onUserSelect(event) {
    console.log(event.detail);
  }

  handleRef = component => {
    this.component = component;
  };

  render() {
    return <users-list userslist={this.users} ref={this.handleRef} />;
  }
}

export default App;
