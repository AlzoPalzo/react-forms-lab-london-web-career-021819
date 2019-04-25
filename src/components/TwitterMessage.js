import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {messageLength: 0};
  }

  handleInputChange = (event) =>
  {
    this.setState({
      messageLength: event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleInputChange} type="text" name="message" id="message" />
        <label> {this.props.maxChars - this.state.messageLength} Characters remaining</label>
      </div>
    );
  }
}

export default TwitterMessage;
