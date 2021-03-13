# auto-complete-search-box

Google 검색어 창을 모티브 한 검색어 입력 시, 입력란 하단에 검색어 자동 완성이 되는 검색창

## ⚙ Stack

- JavaScript

<br/>

## 🖼 UI

<img src="https://user-images.githubusercontent.com/70693728/107844986-79b4da80-6e1b-11eb-8f73-677d092ca22b.png"/>

- [Problem & Solution 정리](https://heeyeonjeong.tistory.com/54?category=945817)

<br/>

## 📚 Features

- 기능 단위로 나눈 함수

```javascript
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
```
