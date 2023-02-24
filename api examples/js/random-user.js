console.log('random user')
const loadUser = () => {
    // console.log('load user arrow ');
    fetch("https://randomuser.me/api/?gender=female")
      .then((res) => res.json())
      .then((data) => diplayUser(data));
}
const diplayUser = user => {
    // console.log(user);
    console.log(user.results[0])

    // name
    const nameTitle = user.results[0].name.title;
    console.log(nameTitle);
    const firstName = user.results[0].name.first;
    const lastname = user.results[0].name.last;
    const fullName = nameTitle + ' ' + firstName + ' ' + lastname;
    const name = document.getElementById('name');
    const gender = document.getElementById('gender');

    const nameSpan = document.createElement('span');
    nameSpan.innerText = fullName;
    console.log(user.results[0].name);
    name.appendChild(nameSpan);

    const genderSpan = document.createElement('span');
    genderSpan.innerText = user.results[0].gender;
    gender.appendChild(genderSpan);
}
loadUser();