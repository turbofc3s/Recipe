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
       setTitle(myMeal.strMeal);
       setRecipePic(myMeal.strMealThumb);
       setInstructions(myMeal.strInstructions);
       if(myMeal.strYoutube) {
        setVideo(myMeal.strYoutube);
       } 
       setIngredients(myMeal);
     })
    
    function setTitle(title) {
      document.getElementById('title').innerHTML = title; 
    }

    function setRecipePic(pic) {
      document.getElementById('recipe-pic').src = pic;
    }

    function setInstructions(instructions) {
      document.getElementById("instructions").innerHTML = instructions;
    }

    function setIngredients(meal) {
      let count = 1
      let ingredients = [];;
      for(let i in meal) {
        let ingredient = "";
        let measure = "";
        if (i.startsWith('strIngredient') && meal[i]) {
        ingredient = meal[i];
        measure = meal[`strMeasure` + count];
        count += 1;
        ingredients.push(`${measure} ${ingredient}`);
      }
     }
       document.getElementById('ingredients').innerHTML = ingredients;
    //   let count = 1
    //   let mealKeys =  Object.keys(meal)
    //   let mealValues = Object.values(meal)
    //   console.log(mealKeys + mealValues)
      
    //   for(let i = 1; i < mealKeys.length; i++) {
    //     let ingredient = '';
    //     let measure = '';
    //     if(mealKeys[i].startsWith('strIngredient'))  {
    //       ingredient = mealValues[i];
    //       measure = mealKeys[`strMeasure` + count];    
    //       count += 1;
    //       ingredients.push(`${measure} ${ingredient}`);


          

    //       }

    // console.log(ingredients);
    //     }
      }  
    function setVideo(url) {
      let id = url.split("=")[1];
      let youTubeUrl = 'https://www.youtube.com/embed/' + id;
      document.getElementById('youtube-btn').src = youTubeUrl;
      // document.getElementById('youtube-btn').src = vid.strYoutube;
    }

      
}
     