import React from 'react';
import PropTypes from 'prop-types';

class SizeChanger extends React.Component {
  static propTypes = {
    changeSize: PropTypes.func,
    selectComponentClass: PropTypes.func,
    pageSizeOptions: PropTypes.arrayOf(PropTypes.string),
    pageSize: PropTypes.number,
    buildOptionText: PropTypes.func,
    locale: PropTypes.object,
  };

  static defaultProps = {
    pageSizeOptions: ['10', '20', '30', '40'],
  };

  buildOptionText = (value) => {
    return `${value}`;
  }

  changeSize = (value) => {
    this.props.changeSize(Number(value));
  }

  render() {
    const props = this.props;
    const prefixCls = `${props.rootPrefixCls}-options`;
    const changeSize = props.changeSize;
    const buildOptionText = props.buildOptionText || this.buildOptionText;
    const Select = props.selectComponentClass;
    let changeSelect = null;

    if (!changeSize) {
      return null;
    }

    if (changeSize && Select) {
      const Option = Select.Option;
      const pageSize = props.pageSize || props.pageSizeOptions[0];
      const options = props.pageSizeOptions.map((opt, i) => (
        <Option key={i} value={opt}>{buildOptionText(opt)}</Option>
      ));

      changeSelect = (
        <Select
          prefixCls={props.selectPrefixCls}
          showSearch={false}
          className={`${prefixCls}-size-changer`}
          optionLabelProp="children"
          dropdownMatchSelectWidth={false}
          value={pageSize.toString()}
          onChange={this.changeSize}
          getPopupContainer={triggerNode => triggerNode.parentNode}
        >
          {options}
       </Select>
      );
    }

    return changeSelect;
  }
}

export default SizeChanger;
