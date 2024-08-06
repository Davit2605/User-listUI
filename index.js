const inputEl = document.getElementById("input");
const outputEl = document.getElementById("results");
const listItems = [];

getData();

inputEl.addEventListener("input", (e) => filterData(e.target.value));

async function getData() {
  const res = await fetch("https://randomuser.me/api?results=50");

  const { results } = await res.json();

  outputEl.innerHTML = "";

  results.forEach((user) => {
    const li = document.createElement("li");

    listItems.push(li);

    li.innerHTML = `
    
    <img class="user-img" src="${user.picture.large}"
      alt="${user.name.first}"/>
    <div class="description">
      <p class="name">${user.name.first} ${user.name.last}</p>
      <small class="location">${user.location.city}, ${user.location.country}</small>
    </div>
    `;

    outputEl.appendChild(li);
  });
}

function filterData(searchTerm) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}
