console.log("firebase.js ready to roll!")

// connect to the Firebase db (database)
var config = 
{
    apiKey: "AIzaSyCuaDfHOqK9T1ptvOhewq19_0sCga2Pa28",
    databaseURL: "https://stream-8cb97.firebaseio.com"
};
firebase.initializeApp(config);

// this is the whole database
var database = firebase.database();

// we want to grab only the "people" part of the database
var filmsDatabase = database.ref('films');

// create a list of people
var filmList = []; // empty list, for now

// load all the children of "people" 
// keep listening for new children
filmsDatabase.on('child_added', function(childData){
    // run these instruction for each child
    // console.table( childData.val() );
    var film = childData.val(); // extract data about the film
    filmList.push( film ); // add the person to the peopleList
})
