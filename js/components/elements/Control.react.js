import React, { Component } from 'react';

class Control extends React.Component {
  constructor(props) {
    super(props);
  }
  handleChange(e) {
    this.setState({value: e.target.value});
  }
  handleFocus(e) {
    this.setState({ focused:true });
  }
  handleBlur(e) {
    this.setState({ focused:false });
  }
  value() {
    if (this.state && this.state.value) {
      return this.state.value;
    }
    return this.props.value;
  }
  render() {
    let {attr, label, value, type, required} = this.props;
    const isRequired = (required && (required === "true" || required === true));
    console.log(required == 'true');
    let controlGroupClass = "control-group";
    if (this.state && this.state.focused) {
      controlGroupClass += " focused";
    }
    return (
      <div className={controlGroupClass}>
        <label htmlFor={attr} className="control-label">{label}</label>
        <div className="controls">
          <input
            type={type}
            id={attr}
            name={attr}
            value={value}
            required={isRequired ? "true" : null}
            onChange={(e) => this.handleChange(e)}
            onFocus={(e) => this.handleFocus(e)}
            onBlur={(e) => this.handleBlur(e)}
            className="control"
          />
        </div>
      </div>
    );
  }
}

export default Control;
