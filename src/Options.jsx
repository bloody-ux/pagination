import React from 'react';
import PropTypes from 'prop-types';
import KEYCODE from './KeyCode';

class Options extends React.Component {
  static propTypes = {
    quickGo: PropTypes.func,
    current: PropTypes.number,
    buildOptionText: PropTypes.func,
    locale: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      current: props.current,
      goInputText: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      goInputText: e.target.value,
    });
  }

  go = (e) => {
    let val = this.state.goInputText;
    if (val === '') {
      return;
    }
    val = Number(val);
    if (isNaN(val)) {
      val = this.state.current;
    }
    if (e.keyCode === KEYCODE.ENTER || e.type === 'click') {
      this.setState({
        goInputText: '',
        current: this.props.quickGo(val),
      });
    }
  }

  render() {
    const props = this.props;
    const state = this.state;
    const locale = props.locale;
    const prefixCls = `${props.rootPrefixCls}-options`;
    const quickGo = props.quickGo;
    const goButton = props.goButton;
    let goInput = null;
    let gotoButton = null;

    if (!quickGo) {
      return null;
    }

    if (quickGo) {
      if (goButton) {
        if (typeof goButton === 'boolean') {
          gotoButton = (
            <button
              type="button"
              onClick={this.go}
              onKeyUp={this.go}
            >
            {locale.jump_to_confirm}
            </button>
          );
        } else {
          gotoButton = (
            <span
              onClick={this.go}
              onKeyUp={this.go}
            >{goButton}</span>
          );
        }
      }
      goInput = (
        <div className={`${prefixCls}-quick-jumper`}>
          {locale.jump_to}
          <input
            type="text"
            value={state.goInputText}
            onChange={this.handleChange}
            onKeyUp={this.go}
          />
          {locale.page}
          {gotoButton}
        </div>
      );
    }

    return (
      <li className={`${prefixCls}`}>
        {goInput}
      </li>
    );
  }
}

export default Options;
