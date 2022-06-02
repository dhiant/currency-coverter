import React, { useState } from "react";

const Currency = () => {
  // list of countries
  const countries = {
    AED: "United Arab Emirates dirham",
    AFN: "Afghan afghani",
    ALL: "Albanian lek",
    AMD: "Armenian dram",
    ANG: "Netherlands Antillean guilder",
    AOA: "Angolan kwanza",
    ARS: "Argentine peso",
    AUD: "Australian dollar",
    AWG: "Aruban florin",
    AZN: "Azerbaijani manat",
    BAM: "Bosnia and Herzegovina convertible mark",
    BBD: "Barbadian dollar",
    BDT: "Bangladeshi taka",
    BGN: "Bulgarian lev",
    BHD: "Bahraini dinar",
    BIF: "Burundian franc",
    BND: "Brunei dollar",
    BOB: "Bolivian boliviano",
    BRL: "Brazilian real",
    BSD: "Bahamian dollar",
    BWP: "Botswana pula",
    BYN: "Belarusian ruble",
    BZD: "Belize dollar",
    CAD: "Canadian dollar",
    CDF: "Congolese franc",
    CHF: "Swiss franc",
    CLP: "Chilean peso",
    CNY: "Renminbi",
    COP: "Colombian peso",
    CRC: "Costa Rican colón",
    CUP: "Cuban peso",
    CVE: "Cape Verdean escudo",
    CZK: "Czech koruna",
    DJF: "Djiboutian franc",
    DKK: "Danish krone",
    DOP: "Dominican peso",
    DZD: "Algerian dinar",
    EGP: "Egyptian pound",
    ERN: "Eritrean nakfa",
    ETB: "Ethiopian birr",
    EUR: "Euro",
    FJD: "Fijian dollar",
    GBP: "Pound sterling",
    GEL: "Georgian lari",
    GHS: "Ghanaian cedi",
    GIP: "Gibraltar pound",
    GMD: "Gambian dalasi",
    GNF: "Guinean franc",
    GTQ: "Guatemalan quetzal",
    GYD: "Guyanese dollar",
    HKD: "Hong Kong dollar",
    HNL: "Honduran lempira",
    HRK: "Croatian kuna",
    HTG: "Haitian gourde",
    HUF: "Hungarian forint",
    IDR: "Indonesian rupiah",
    ILS: "Israeli new shekel",
    INR: "Indian rupee",
    IQD: "Iraqi dinar",
    IRR: "Iranian rial",
    ISK: "Icelandic króna",
    JMD: "Jamaican dollar",
    JOD: "Jordanian dinar",
    JPY: "Japanese yen",
    KES: "Kenyan shilling",
    KGS: "Kyrgyzstani som",
    KHR: "Cambodian riel",
    KMF: "Comorian franc",
    KRW: "South Korean won",
    KWD: "Kuwaiti dinar",
    KZT: "Kazakhstani tenge",
    LAK: "Lao kip ",
    LBP: "Lebanese pound",
    LKR: "Sri Lankan rupee",
    LRD: "Liberian dollar",
    LSL: "Lesotho loti",
    LYD: "Libyan dinar",
    MAD: "Moroccan dirham",
    MDL: "Moldovan leu",
    MGA: "Malagasy ariary",
    MKD: "Macedonian denar",
    MMK: "Burmese kyat",
    MNT: "Mongolian tögrög",
    MOP: "Macanese pataca",
    MRU: "Mauritanian ouguiya",
    MUR: "Mauritian rupee",
    MVR: "Maldivian rufiyaa",
    MWK: "Malawian kwacha",
    MXN: "Mexican peso",
    MYR: "Malaysian ringgit",
    MZN: "Mozambican metical",
    NAD: "Namibian dollar",
    NGN: "Nigerian naira",
    NIO: "Nicaraguan córdoba",
    NOK: "Norwegian krone",
    NPR: "Nepalese rupee",
    NZD: "New Zealand dollar",
    OMR: "Omani rial",
    PAB: "Panamanian balboa",
    PEN: "Peruvian sol",
    PGK: "Papua New Guinean kina",
    PHP: "Philippine peso",
    PKR: "Pakistani rupee",
    PLN: "Polish złoty",
    PYG: "Paraguayan guaraní",
    QAR: "Qatari riyal",
    RON: "Romanian leu",
    RSD: "Serbian dinar",
    RUB: "Russian ruble",
    RWF: "Rwandan franc",
    SAR: "Saudi riyal",
    SBD: "Solomon Islands dollar",
    SCR: "Seychellois rupee",
    SDG: "Sudanese pound",
    SEK: "Swedish krona",
    SGD: "Singapore dollar",
    SLL: "Sierra Leonean leone",
    SOS: "Somali shilling",
    SRD: "Surinamese dollar",
    SSP: "South Sudanese pound",
    STN: "São Tomé and Príncipe dobra",
    SVC: "Salvadoran colón",
    SYP: "Syrian pound",
    SZL: "Swazi lilangeni",
    THB: "Thai baht",
    TJS: "Tajikistani somoni",
    TMT: "Turkmenistan manat",
    TND: "Tunisian dinar",
    TOP: "Tongan paʻanga",
    TRY: "Turkish lira",
    TTD: "Trinidad and Tobago dollar",
    TWD: "New Taiwan dollar",
    TZS: "Tanzanian shilling",
    UAH: "Ukrainian hryvnia",
    UGX: "Ugandan shilling",
    USD: "United States dollar",
    UYU: "Uruguayan peso",
    UZS: "Uzbekistani soʻm",
    VES: "Venezuelan bolívar",
    VND: "Vietnamese đồng",
    VUV: "Vanuatu vatu",
    WST: "Samoan tālā",
    XAF: "Central African CFA franc",
    XCD: "Eastern Caribbean dollar",
    XDR: "Special drawing rights",
    XOF: "West African CFA franc",
    XPF: "CFP franc",
    YER: "Yemeni rial",
    ZAR: "South African rand",
    ZMW: "Zambian kwacha",
    ZWL: "Zimbabwean dollar",
  };
  const allCountriesCurrency = Object.keys(countries);
  const allCountriesName = Object.values(countries);

  const [primaryCurrency, setPrimaryCurrency] = useState("AUD");
  const [secondaryCurrency, setSecondaryCurrency] = useState("AED");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(null);

  const convertCurrency = () => {
    const myHeaders = new Headers();
    myHeaders.append("apikey", "yRDGKAifmJIQ8Cr6RQEEHoMMcglTTGYi");

    const requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    fetch(
      `https://api.apilayer.com/exchangerates_data/convert?to=${secondaryCurrency}&from=${primaryCurrency}&amount=${amount}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => setResult(data.result))
      .catch((error) => console.log("error", error));
  };

  return (
    <section className="selectCurrency">
      <h2>Currency Converter</h2>
      <form
        className="currencyConverterForm"
        onSubmit={(e) => e.preventDefault()}
      >
        <div>
          <label htmlFor="p_currency">From</label>
          <select
            id="p_currency"
            name="p_currency"
            onChange={(e) => {
              setPrimaryCurrency(e.target.value);
            }}
          >
            {allCountriesName.map((country, index) => {
              return (
                <option key={index} value={`${allCountriesCurrency[index]}`}>
                  {country}
                  {` (${allCountriesCurrency[index]}) `}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label htmlFor="p_currency">To</label>
          <select
            id="p_currency"
            name="p_currency"
            onChange={(e) => setSecondaryCurrency(e.target.value)}
          >
            {allCountriesName.map((country, index) => {
              return (
                <option key={index} value={`${allCountriesCurrency[index]}`}>
                  {country}
                  {` (${allCountriesCurrency[index]}) `}
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
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn" onClick={convertCurrency}>
          Convert
        </button>
        <div>
          <label htmlFor="exchanged_amount">Exchanged Amount</label>
          <div className="exchangedAmount">
            Your Exchanged amount is: {secondaryCurrency} {result}
          </div>
        </div>
      </form>
    </section>
  );
};

export default Currency;
