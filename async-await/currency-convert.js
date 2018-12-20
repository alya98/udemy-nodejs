// http://data.fixer.io/api/latest?access_key=e2dfca9286247ab0559ec409696bd607
const axios = require('axios');

const getExchangeRate = async (from, to) => {
  try{
    const {data} = await axios.get('http://data.fixer.io/api/latest?access_key=e2dfca9286247ab0559ec409696bd607');
    const euro = 1/data.rates[from];
    const rate = euro * data.rates[to];
    if (isNaN(rate)) {
      throw new Error()
    }
    return rate;
  } catch (e) {
    throw new Error(`unable to get exchange rate for ${from} and ${to}`)
  }
};

const getCountries = async (currencyCode) => {
  try{
    const { data } = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
    return data.map(country => country.name)
  } catch (e) {
    throw new Error(`unable to get countries that use ${currencyCode} `)
  }
}

const convertCurrency = async (from, to, amount) => {
  const rate = await getExchangeRate(from, to);
  const countries = await getCountries(to);
  const result = (amount * rate).toFixed(2);
  return `${amount} ${from} is worth ${result} ${to}. You can spend these in the following countries: ${countries}`
}




convertCurrency('USD', 'BYN', 540).then(console.log).catch(e => console.log(e.message))