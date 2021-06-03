const APIURL = "https://anapioficeandfire.com/api/characters?name=";

const charAPI = (char) =>
  fetch(`${APIURL}${char.split().join("+")}`)
    .then((response) => response.json())
    .then((json) => {
      if (json.length !== 0) return json[0];
      throw ("Não foi possível realizar a busca");
    });

export default charAPI;
