// console.log("SOS");
import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/  

let userName = "murraywarnock"
let userURL = "https://api.github.com/users/" + userName;
// function myData() {
axios
  .get(userURL)
  .then((obj) => {
    console.log(obj);
    console.log(userCardMaker(obj));
    let cardsClass = document.querySelector(".cards");
    cardsClass.appendChild(userCardMaker(obj))
  })
  .catch((err) => {
    console.log(err);
  })
;

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];
followersArray.forEach((follower) => {
  let userURL = "https://api.github.com/users/" + follower;
    axios
    .get(userURL)
    .then((obj) => {
     let cardsClass = document.querySelector(".cards");
      cardsClass.appendChild(userCardMaker(obj));
    })
    .catch((err) => {
      console.log(err);
    })
  });

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function userCardMaker(userObj) {
  // Create html skeleton with classes
  const cmCard = document.createElement("div");
    cmCard.classList.add("card");
  const cmImage = cmCard.appendChild(document.createElement("img")); //will take url of user
  const cmCardInfo = cmCard.appendChild(document.createElement("div")); // card-info class
    cmCardInfo.classList.add("card-info");
  const cmNameH3 = cmCardInfo.appendChild(document.createElement("h3")); // name class
    cmNameH3.classList.add("name");
  const cmUsername = cmCardInfo.appendChild(document.createElement("p")); // username class
    cmUsername.classList.add("username");
  const cmLocation = cmCardInfo.appendChild(document.createElement("p")); // Location
  const cmProfileP = cmCardInfo.appendChild(document.createElement("p")); // profile
  // const cmProfileURL = cmProfileP.appendChild(document.createElement("a")); // profile URL
  const cmProfileURL = document.createElement("a");
  const cmFollowers = cmCardInfo.appendChild(document.createElement("p")); // Followers
  const cmFollowing = cmCardInfo.appendChild(document.createElement("p")); // Following
  const cmBio = cmCardInfo.appendChild(document.createElement("p")); // cmBio

  // Populate data
  cmImage.src = userObj.data.avatar_url;
  cmNameH3.textContent = userObj.data.name;
  cmUsername.textContent = userObj.data.login;
  cmLocation.textContent = `Location: ${userObj.data.location}`;
  cmProfileP.textContent = "Profile: ";
  cmProfileP.appendChild(cmProfileURL); // profile URL
   // What's the profile URL?
  cmProfileURL.href = userObj.html_url;
  cmProfileURL.textContent = "link";
  cmFollowers.textContent = `Followers: ${userObj.data.followers}`;
  cmFollowing.textContent = `Following: ${userObj.data.following}`;
  cmBio.textContent = `Bio: ${userObj.data.bio}`;
   return cmCard;
};


// console.log(userCardMaker(data));

 
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
