// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

  //declare variables to represent the html elements
  const modal = document.querySelector("#modal");
  const like = document.querySelectorAll(".like-glyph");

  //function to invoke when the likeglyph is cliked
  function heartClicked(event) {
    const heart = event.target;
    //call the server function to be invoked
    mimicServerCall()
      .then(() => {
        if (heart.textContent === EMPTY_HEART) {
          heart.textContent = FULL_HEART;
          heart.classList.add("activated-heart");
        } else {
          heart.textContent = EMPTY_HEART;
          heart.classList.remove("activated-heart");
        }
        modal.classList.add("hidden");
      })
      .catch((error) => {
        const p = document.getElementById("modal-message");
        p.textContent = error;
        modal.classList.remove("hidden");
        setTimeout(() => {
          modal.classList.add("hidden");
        }, 3000);
      });
  }

  //event listener to invoke when the like is clicked
  like.forEach((heart) => {
    heart.addEventListener("click", heartClicked);
  });



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
