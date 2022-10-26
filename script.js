// variables
let result = document.getElementById('result');
let recipeBtn = document.getElementById('recipe-btn');
let youtubeBtn = document.getElementById('youtube-btn');
let url = "https://www.themealdb.com/api/json/v1/1/randomselection.php";

  axios
    .get(url )
    .then(response => {
      console.log(response)
    })