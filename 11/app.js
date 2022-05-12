const $docs = document.getElementById("docs");
const $query = document.querySelector("[name = 'query']");
// const $searchBtn = document.getElementById("searchBtn");
const $searchForm = document.getElementById("searchForm");

function getFetch(url, callback) {
  const headers = {
    Authorization: "KakaoAK a03f29f8f5477cecf9abbb0e91fc6bb5",
  };
  fetch(url, { headers })
    .then((response) => response.json())
    .then((data) => callback(data));
}
function search() {
  const query = $query.value;
  const url = `https://dapi.kakao.com/v2/search/web?query=${query}`;

  getFetch(url, (data) => {
    const { documents } = data;

    const docs = documents.map((document) => {
      return document.contents;
    });

    $docs.innerHTML = docs.join("<hr>");
  });
}

// $searchBtn.addEventListener("click", search);
// $query.addEventListener('keydown', (event)=>{
//   if(event.key !== 'Enter')return;
//   search();
// })

$searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  search();
});
