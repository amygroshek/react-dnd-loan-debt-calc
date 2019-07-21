import React from 'react';
import classNames from 'classnames';

const SpiralForm = ({ onSubmit, getCurrencyFormat, handleInputChange, onClick, onFocus, onBlur, myBalanceRef, userLoan, strings, inputs, ...props }) => {
  // Set up classes for validation feedback.
  const amtGroupClass = classNames('form-group amtGroupClass',
    {
      'has-error': !props.loanTotalCurr.isValid,
      'has-focus': inputs.loanTotalCurr.focused,
      'has-value': inputs.loanTotalCurr.hasValue,
      'twin-has-value': inputs.loanTotalCurr2.hasValue
    }
  );

  const currDisplay = userLoan ? getCurrencyFormat(userLoan, false) : strings.fields.loanBalance;

  const clearInput = (e) => {
    // console.log('clear input');
    const input = e.target.parentNode.getElementsByTagName('input')[0];
    input.value = '';
    var event = new Event('input', {
      'bubbles': true,
      'cancelable': true
    });
    input.dispatchEvent(event);
  }

  return (
    <form noValidate id="form1" onSubmit={(e) => onSubmit(e)}>
      <div className={amtGroupClass}>
        <label>{strings.fields.loanBalance}</label>
        <span className="symbol-wrapper currency">
          <span className="amount">{currDisplay}</span>
          <input
            type="number"
            id="loan_amt_curr"
            name="loanTotalCurr"
            autoComplete="off"
            className="curr"
            maxLength="7"
            aria-label={'Enter ' + strings.fields.loanBalance}
            onClick={(e) => onClick(e)}
            onFocus={(e) => onFocus(e)}
            onBlur={(e) => onBlur(e)}
            onInput={(e) => handleInputChange(e)}
          />
        </span>
        <i
          className="clear"
          onClick={(e) => {clearInput(e)}}></i>
        <div className="invalid-feedback">
          {props.loanTotalCurr.message}
        </div>
      </div>
    </form>
  );
}

export default SpiralForm;
