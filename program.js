  var config = {
    apiKey: "AIzaSyBb6qg_qvaXjCx1WJ-qu-cE5Io_MfY8efQ",
    authDomain: "this-is-so-cool-31ce5.firebaseapp.com",
    databaseURL: "https://this-is-so-cool-31ce5.firebaseio.com",
    projectId: "this-is-so-cool-31ce5",
    storageBucket: "this-is-so-cool-31ce5.appspot.com",
    messagingSenderId: "964871781017"
  };

    firebase.initializeApp(config);

    // Create a variable to reference the database.
    var database = firebase.database();



    // Capture Button Click
    $("#add-click-btn").on("click", function(event) {
      event.preventDefault();

      // Grabbed values from text boxes
       var empName= $("#employee-name-input").val().trim();
       var empRole= $("#role-input").val().trim();
       var empStart= $("#start-input").val().trim();
       var empRate= $("#rate-input").val().trim();
      
      // Code for handling the push
      database.ref().push({
        name: empName,
        role: empRole,
        start: empStart,
        rate: empRate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });

      $("#employee-name-input").val("")
      $("#role-input").val("")
      $("#start-input").val("")
      $("#rate-input").val("")

    });

    // Firebase watcher .on("child_added"
    database.ref().on("child_added", function(snapshot) {
      // storing the snapshot.val() in a variable for convenience
      var sv = snapshot.val();

      // Console.loging the last user's data
      console.log(sv);
      console.log(sv.name);
      console.log(sv.role);
      console.log(sv.start);
      console.log(sv.rate);

      // Change the HTML to reflect

      var row = $("<tr>");
      row.append(
        row.text(sv.name),
        row.text(sv.role),
        row.text(sv.start),
        row.text(sv.rate)
      )
      $("#name-display").text(sv.name);
      $("#email-display").text(sv.role);
      $("#age-display").text(sv.start);
      $("#comment-display").text(sv.rate);

      // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });


