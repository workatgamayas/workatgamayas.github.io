
var mainContainer = document.getElementById("logout");
firebase.auth().onAuthStateChanged(function(user) {
    if (user) 
    {
        // User is signed in.
      console.log("stay");
      mainContainer.style.display = "";
      var user=fireBase.auth().currentUser;
      if(user!=null)
      {
         var name=user.displayName;
         document.getElementById("x2").innerHTML="Logged in as :<br>   "+name;
         
      }
    } 
    else {
       // No user is signed in.
          mainContainer.style.display = "none";
         console.log("redirect");
        // window.location.replace("Services.html");
    }
  });
  function sendMessage() {
    // get message
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var phone_number=document.getElementById("phone_number").value;
    var message = document.getElementById("message").value;

    // save in database
    firebase.database().ref("messages").push().set({
        "name": name,
        "email":email,
        "phone number":phone_number,
        "message": message
    });

    // prevent form from submitting
    return false;
}
  function logout(){
    firebase.auth().signOut().then(function(){
        console.log('success');
        window.location.replace("Index.html");
    });
  }


var countDownDate = new Date("Nov 11, 2020 15:00:00").getTime();


var x = setInterval(function() {

 
  var now = new Date().getTime();
    

  var distance = countDownDate - now;
    
 
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
 
  document.getElementById("eventt").innerHTML = days  +":" + hours + ":"
  + minutes + ":" + seconds + "";
    
  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("eventt").innerHTML = "Event Started";
  }
}, 1000);
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
  