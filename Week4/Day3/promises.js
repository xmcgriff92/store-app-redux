async function getFoodPics (){
    const foodPics = await fetch("https://foodish-api.herokuapp.com/images/");
    const jsonfood = await foodPics.json();
    return jsonfood;
}

getFoodPics()