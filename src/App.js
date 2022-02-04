import { useEffect, useState } from "react";
import "./App.css";
import CurrencyRow from "./CurrencyRow.js";

const BASE_URL = "http://api.nbp.pl/api/exchangerates/tables/a/";
const BASE_CURRENCY_CODE = "PLN";

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        const rates = data[0].rates;
        const firstCurrency = rates[0].code;
        const ratesCode = rates.map((rate) => {
          return rate.code;
        });

        setCurrencyOptions([BASE_CURRENCY_CODE, ...ratesCode]);
        setFromCurrency(BASE_CURRENCY_CODE);
        setToCurrency(firstCurrency);
      });
  }, []);

  return (
    <>
      <h1>Convert</h1>

      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        onChangedCurrency={(e) => setFromCurrency(e.target.value)}
      />
      <div className="equals">=</div>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onChangedCurrency={(e) => setToCurrency(e.target.value)}
      />
    </>
  );
}

export default App;
