 window.addEventListener('load',  function() { 
   getMeals()    
 })
    // variables
let title = document.getElementById('title')
let changeBtn = document.getElementById('change-btn');
let recipePic = document.getElementById('recipe-pic');
let youtubeBtn = document.getElementById('youtube-btn');
let list = document.getElementById('list');
let instructions = document.getElementById("instructions")
let url = "https://www.themealdb.com/api/json/v1/1/random.php";

function getMeals() {
  axios.get(url)
    .then(response => {
      const myMeal = response.data.meals[0]
      setTitle(myMeal.strMeal);
      setRecipePic(myMeal.strMealThumb);
      setInstructions(myMeal.strInstructions);
      if(myMeal.strYoutube) {
       setVideo(myMeal.strYoutube);
      } else {
       youtubeBtn.remove
      }
      setIngredients(myMeal);
  })
}    

  changeBtn.addEventListener('click', function() {
//  get request function to get info from the meal api
     getMeals()
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
       console.log(ingredients)

       ingredients.forEach((item) => {
        let li = document.createElement('li');
        li.innerText = item;
        list.appendChild(li);
      });

    }  
    function setVideo(url) {
      let id = url.split("=")[1];
      let youTubeUrl = 'https://www.youtube.com/embed/' + id;
      document.getElementById('youtube-btn').src = youTubeUrl;
      // document.getElementById('youtube-btn').src = vid.strYoutube;
    }      

  

  

  