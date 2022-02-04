import React from "react";

export default function CurrencyRow(props) {
  const { currencyOptions, selectedCurrency, onChangedCurrency } = props;

  return (
    <div>
      <input type="number" className="input" />
      <select value={selectedCurrency} onChange={onChangedCurrency}>
        {currencyOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
