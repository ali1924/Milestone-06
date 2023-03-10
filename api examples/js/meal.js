// console.log("meal");
const loadMeals = (searchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
};
const displayMeals = (meals) => {
  console.log(meals);
  // container element creat
    const mealContainer = document.getElementById("meal-container");
    mealContainer.innerHTML = ``;
    
  meals.forEach((meal) => {
    // console.log(meal);
    // creat chlid
    const mealDiv = document.createElement("div");
    mealDiv.innerHTML = `
            <div class="col">
                <div class="card h-100">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">This is a short card.</p>

                    <button onclick="loadMealDetail(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
                    Details
                    </button>

                    </div>
                </div>
            </div>


        `;
    mealContainer.appendChild(mealDiv);
  });
};
const searchMeals = () => {
    // console.log('btn--------')
    const searchText = document.getElementById("search-field").value;
    console.log(searchText);
    loadMeals(searchText);
    
}
const loadMealDetail = idMeal => {
    // console.log('csdb')
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
}
const displayMealDetails = meal => {
    // console.log(meals);
    document.getElementById("mealDetailsLabel").innerText = meal.strMeal;
    const mealDetails = document.getElementById("mealDetailsBody");
    mealDetails.innerHTML = `
        <img class="img-fluid" src="${meal.strMealThumb}" class="card-img-top" alt="...">
    `;
}

loadMeals('');





