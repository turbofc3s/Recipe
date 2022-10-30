// variables
let title = document.getElementById('title')
let changeBtn = document.getElementById('change-btn');
let recipePic = document.getElementById('recipe-pic');
let youtubeBtn = document.getElementById('youtube-btn');
let ingredients = document.getElementById('ingredients');
let instructions = document.getElementById("instructions")
let url = "https://www.themealdb.com/api/json/v1/1/random.php";

// functions to change recipes
  function newRecipe() {
//  get request function to get info from the meal api
    axios.get(url)
     .then(response => {
       const myMeal = response.data.meals[0]
       setTitle(myMeal);
       setRecipePic(myMeal);
       setInstructions(myMeal); 
       setYoutube(myMeal); 
       setIngredients(myMeal);
    })  
    
    function setTitle(recipe) {
      document.getElementById('title').innerHTML = recipe.strMeal; 
    }

    function setRecipePic(pic) {
      console.log(pic.strMealThumb)
      document.getElementById('recipePic').src = pic.strMealThumb;
    }

    function setInstructions(instructions) {
      document.getElementById("instructions").innerHTML = instructions.strInstructions;
    }

    function setYoutube(video) {
      document.getElementById('youtubeBtn').src = video.strYoutube
    } 

    function setIngredients(list) {
      let  theIngredients = list.strIngredients
      console.log(theIngredients)
        for (let i = 0 ; i < theIngredients.length; i++) {
          if (theIngredients[i] !== "") {


      }

    } document.getElementById("ingredients").innerHTML  = 
  }
}
     