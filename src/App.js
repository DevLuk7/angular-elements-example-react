import React, { Component } from "react";
import "./angular-elements-example";

class App extends Component {
  users = JSON.stringify([{ name: "John Wick" }, { name: "IronMan" }]);

  componentDidMount() {
    this.component.addEventListener("userSelect", this.onUserSelect);
  }

  componentWillUnmount() {
    this.component.removeEventListener("userSelect", this.onUserSelect);
  }

  onUserSelect(event) {
    alert(JSON.stringify(event.detail));
  }

  handleRef = component => {
    this.component = component;
  };

  render() {
    return <users-list userslist={this.users} ref={this.handleRef} />;
  }
}

export default App;
