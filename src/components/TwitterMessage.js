import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
    };
  }

  handleInputChange = (event) =>
  {
    this.setState({
      message: event.target.value
      // messageLength: event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input value={this.state.message} onChange={this.handleInputChange} type="text" name="message" id="message" />
        <label> {this.props.maxChars - this.state.message.length} Characters remaining</label>
      </div>
    );
  }
}

export default TwitterMessage;
