console.log("appp");
const loadPhones = async (searchText) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  detailsPhone(data.data);
};
const detailsPhone = (phones) => {
  console.log(phones);
    const phonesContainer = document.getElementById("phone-container");
    phonesContainer.textContent = ``;
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
                    </div>
                </div>
        `;
    phonesContainer.appendChild(phoneDiv);
  });
};
document.getElementById("btn-search").addEventListener('click', function () {
    // console.log('button')
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhones(searchText);
});
loadPhones();
