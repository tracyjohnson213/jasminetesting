/*
    If the age is less than 0, then it should return "Sorry. I can�t tell what drink because that age is incorrect!"
    If the age is less than 14, then it should return "Drink Toddy"
    If the age is less than 18, then it should return "Drink Coke"
    If the age is less than 21, then it should return "Drink Beer"
    If the age is less than 130, then it should return "Drink Whisky"
    Else return "Sorry. I can�t tell what drink because that age is incorrect!"
*/

function whatCanIDrink(age) {
    if (age < 0 || age > 130) {
        return "Sorry. I can�t tell what drink because that age is incorrect!";
    } else if (age < 14) {
        return "Drink Toddy";
    } else if (age < 18) {
        return "Drink Coke";
    } else if (age < 21) {
        return "Drink Beer";
    } else {
        return "Drink Whisky";
    } 
}