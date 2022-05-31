document.addEventListener('DOMContentLoaded', () => {

let typeTitle = document.querySelector("h2");
let activityDisplayed = document.querySelector("p");
let somethingElse = document.getElementById("btn2");
let letsDoThis = document.getElementById("submit_button");
let activityArr = [];

// testing change.

//renders a random activity to the DOM 
function getActivity() {
fetch("http://www.boredapi.com/api/activity")
.then(resp => {
    return resp.json();
})
.then(data => {                      
    for (let [activity, type] of Object.entries(data)) {
        activityArr = [activity, type]
    }
activityDisplayed.textContent = data.activity
typeTitle.textContent = data.type
return activityArr
});
}
getActivity()

//if "Maybe Something Else" btn clicked, render a new random activity"
function getNewActivity() {
    somethingElse.addEventListener('click', () => {
      getActivity()
    });
 };
 getNewActivity()

 
 //if "Let's do this button!" btn clicked, submit event is fired activating a'alert' message
 function foundActivity() {
     letsDoThis.addEventListener('submit', (e) => {
    alert("Yay! you found an activity to do :)");
    e.preventDefault();
    foundActivity()
 });
}
foundActivity()
});

