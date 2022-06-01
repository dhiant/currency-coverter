import React from "react";

const Currency = () => {
  const primaryCurrency = ["AUD", "USD", "EUR"];
  const secondaryCurrency = ["NPR", "INR"];
  return (
    <section className="selectCurrency">
      <h2>Currency Converter</h2>
      <form
        className="currencyConverterForm"
        onSubmit={(e) => e.preventDefault()}
      >
        <div>
          <label htmlFor="p_currency">From</label>
          <select id="p_currency" name="p_currency">
            {primaryCurrency.map((country, index) => {
              return (
                <option key={index} value={country}>
                  {country}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label htmlFor="p_currency">To</label>
          <select id="p_currency" name="p_currency">
            {secondaryCurrency.map((country, index) => {
              return (
                <option key={index} value={country}>
                  {country}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label htmlFor="amount">Amount </label>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="Enter amount"
            value=""
          />
        </div>
        <button className="btn">Convert</button>
        <div>
          <label htmlFor="exchanged_amount">Exchanged Amount</label>
          <div className="exchangedAmount">Your Exchanged amount is:</div>
        </div>
      </form>
    </section>
  );
};

export default Currency;
