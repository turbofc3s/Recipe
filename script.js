// variables
let title = document.getElementById('title')
let changeBtn = document.getElementById('change-btn');
let recipePic = document.getElementById('recipe-pic');
let youtubeBtn = document.getElementById('youtube-btn');
let ingredients = document.getElementById('ingredients');
let instructions = document.getElementById("instructions")
let url = "https://www.themealdb.com/api/json/v1/1/random.php";

  function newRecipe() {
//  get request function to get info from the meal api
    axios.get(url)
     .then(response => {
       const myMeal = response.data.meals[0]
       setTitle(myMeal);
       setRecipePic(myMeal);
       setInstructions(myMeal);
       setVideo(myMeal);
       // setIngredients(myMeal);
     })
    
    function setTitle(recipe) {
      document.getElementById('title').innerHTML = recipe.strMeal; 
    }

    function setRecipePic(pic) {
      document.getElementById('recipe-pic').src = pic.strMealThumb;
    }

    function setInstructions(info) {
      document.getElementById("instructions").innerHTML = info.strInstructions;
    }

    // function setIngredients(need) {
    //   const items = [] 
    //   for(let i = 1; i <= 20; i++) {
    //     if(!need.strIngredients[i] == "") {
    //       items.push(need.strIngredients[i] - need.strMeasure[i])
    //     } else {
    //       break;
    //    }
    //   }  
    function setVideo(vid) {
      console.log(vid.strYoutube)
      document.getElementById('youtube-btn').src = vid.strYoutube;
    }

    
}
     