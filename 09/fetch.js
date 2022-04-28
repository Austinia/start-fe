function getFetch(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => cancelIdleCallback(data));
}

getFetch("data.json", (data) => console.log(data));
