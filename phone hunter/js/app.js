console.log("appp");
const loadPhones = async (searchText,dataLimit) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  detailsPhone(data.data,dataLimit);
};
const detailsPhone = (phones,dataLimit) => {
  console.log(phones);
  const phonesContainer = document.getElementById("phone-container");
  phonesContainer.textContent = ``;
  // display 10 phones only
  const showAll = document.getElementById("show-all");
  // phones = phones.slice(0, 10);
  if (dataLimit && phones.length > 10) {
    phones = phones.slice(0, 10);
    showAll.classList.remove("d-none");
  }
  else {
    showAll.classList.add('d-none');
  }
  /* // display no phone
  const noPhoneMessage = document.getElementById("no-found-message");
  if (phones.length === 0) {
    // console.log(noPhoneMessage.innerHTML)
    noPhoneMessage.classList.remove("d-none");
    
  }
  // display all phone
  else {
    noPhoneMessage.classList.add("d-none");
  }*/
  phones.forEach((phone) => {
    // console.log(phone);
    const phoneDiv = document.createElement("div");
    phoneDiv.classList.add("col");
    phoneDiv.innerHTML = `
                <div class="card h-100 p-4">
                    <img src="${phone.image}" class="card-img-top img-fluid" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">${phone.phone_name}</h5>
                        <p class="card-text">
                            This is a longer card with supporting text below as a
                            natural lead-in to additional content. This content is a
                            little bit longer.
                        </p>
                        <button onclick="loadPhoneDetails('${phone.slug}')" href="#" class="btn btn-primary">Show Details</button>
                    </div>
                </div>
        `;
    phonesContainer.appendChild(phoneDiv);
  });
  // stop loader
  toggleSpinner(false);
};
const processSearch = (dataLimit) => {
    toggleSpinner(true);
    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;
    // console.log(searchText);
    loadPhones(searchText,dataLimit);
}
// handle search button click
document.getElementById("btn-search").addEventListener("click", function () {
  // console.log('button')
  // start loader
  processSearch(10);
});
// search input filed enter key handler
document.getElementById('search-field').addEventListener('keypress', function (e) {
  console.log(e.key);
  if (e.key === 'Enter') {
    processSearch(10);
  }
})


const toggleSpinner = (isLoading) => {
  const loaderSection = document.getElementById("loader");
  if (isLoading) {
    loaderSection.classList.remove("d-none");
  } else {
    loaderSection.classList.add("d-none");
  }
};
// not the best way to load all
document.getElementById("btn-show-all").addEventListener('click', function () {
  processSearch();
})
// display loadphoneDetails
const loadPhoneDetails =async id => {
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}
// loadPhones();
