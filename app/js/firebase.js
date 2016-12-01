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
var peopleDatabase = database.ref('films');

// create a list of people
var peopleList = []; // empty list, for now

// load all the children of "people" 
// keep listening for new children
peopleDatabase.on('child_added', function(childData){
    // run these instruction for each child
    // console.table( childData.val() );
    var person = childData.val(); // extract data about the person
    peopleList.push( person ); // add the person to the peopleList
})
