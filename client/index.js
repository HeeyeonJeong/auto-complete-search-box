const searchBox = document.querySelector("#search-field");
const completeBox = document.querySelector(".autocomplete-results");

//list 출력
function paintList(words) {
  completeBox.innerHTML = "";
  for (let i = 0; i < words.length; i++) {
    const completeWord = document.createElement("li");
    completeBox.appendChild(completeWord);
    completeWord.innerHTML = words[i];
    completeWord.addEventListener("click", valueChange);
  }
}

//keyword click시 input value 변경
function valueChange(e) {
  const userChoice = e.target.innerHTML;
  searchBox.value = userChoice;
  loadData(searchBox.value);
}

//data fetch
async function loadData() {
  let searchWord = searchBox.value;
  try {
    await fetch(`http://localhost:3000/autocomplete?keyword=${searchWord}`)
      .then((response) => response.json())
      .then((data) => paintList(data));
  } catch (error) {
    console.log(error);
  }
}

searchBox.addEventListener("keyup", loadData);
