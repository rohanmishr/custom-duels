const user = firebase.auth().currentUser;

  // The user object has basic properties such as display name, email, etc.
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;
  

  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getIdToken() instead.
  const uid = user.uid;




firebase.auth().onAuthStateChanged((user) => {
    if (email == "incbomyt@gmail.com" && emailVerified == true) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      // ...
    } else if (email == "pillageyt@gmail.com" && emailVerified == true) {
      // User is signed out
      // ...
    } else if (email == "ruangang@gmail.com" && emailVerified == true) {
      // User is signed out
      // ...
    } else if (email == "treebronch.contact@gmail.com" && emailVerified == true) {
      // User is signed out
      // ...
    } else if (email == "nathanedgington1@hvrsd.org" && emailVerified == true) {
      // User is signed out
      // ...
    } else if (email == "justinedgington1@hvrsd.org" && emailVerified == true) {
      // User is signed out
      // ...
    } else if (email == "rohanmishra@hvrsd.org" && emailVerified == true) {
      // User is signed out
      // ...
    } else if (email == "maximkudryashov@hvrsd.org" && emailVerified == true) {
      // User is signed out
      // ...
    } else if (email == null) {
        // User is signed out
        // ...
        window.location.href = '../login.html';
        window.alert("You must be logged in to view this page.")
       
    } else {
        // User is signed out
        // ...
        window.location.href = "../login.html";
        window.alert("You are not autherized to view this page.")
        
    }
  });