// console.log("all countries");
const loadCountries = () => {
  // console.log('function');
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountriesInfo(data));
};
const displayCountriesInfo = (countries) => {
  // for (const country of countries) {
  //     console.log(country);
  // }
  // container
  const countriesContainer = document.getElementById("all-countries");
  // console.log(countries);

  countries.forEach((country) => {
    // console.log(country.cca2);
    // console.log(country.capital);
    const countryDiv = document.createElement("div");
    countryDiv.classList.add("country");
    countryDiv.innerHTML = `
             <h3>Name: ${country.name.common}</h3>
             <h4>
                   Capital: ${
                     country.capital ? country.capital[0] : "No Capital"
                   } 
             </h4>
             <button onclick="loadCountryDetails('${country.cca2}')">
                    Details
             </button>
        `;
    countriesContainer.appendChild(countryDiv);
  });
};
const loadCountryDetails = (code) => {
  //   console.log("details comming",code);
  // dynamic url
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCountriesdetails(data[0]));
};

const displayCountriesdetails = (country) => {
  console.log(country);
  const detailsContainer = document.getElementById("country-details");
  detailsContainer.innerHTML = `
      <h1>Country Details</h1>
      <h3>Name:${country.name.common}</h3>
      <p>Capital:${country.capital[0]}</p>
      <img src="${country.flags.png}" alt="" />
    `;
    
};
loadCountries();
