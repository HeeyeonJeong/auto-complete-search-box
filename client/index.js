const searchBox = document.querySelector("#search-field");
const completeBox = document.querySelector(".autocomplete-results");

//list 출력
function paintList(words) {
  completeBox.innerHTML = "";
  for (let i = 0; i < words.length; i++) {
    const completeWord = document.createElement("li");
    completeBox.appendChild(completeWord);
    completeWord.innerHTML = words[i];
  }
}

//keyword click시 input value 변경
function valueChange(e) {
  const userChoice = e.target.innerHTML;
  searchBox.value = userChoice;
  completeBox.innerHTML = "";
}

completeBox.addEventListener("click", valueChange);

//data fetch
async function loadData() {
  const searchWord = searchBox.value;
  const response = await fetch(
    `http://localhost:3000/autocomplete?keyword=${searchWord}`
  );
  const data = await response.json();
  paintList(data);
}

searchBox.addEventListener("keyup", loadData);
