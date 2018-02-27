var friendsData = require("../data/friends.js");


module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });



  app.post("/api/friends", function(req, res) {
    var matchData={
      name:"",
      photo:"",
      friendDifference:20
    };
    var userData = req.body;
    var userName = userData.name;
    var userPhoto = userData.photo;
    var userScores = userData.scores;
    var totalDifference = 0;

    for(var i=0; i<friendsData.lengrh;i++){
      totalDifference=0;
      for(var j=0;j<4;j++){
        totalDifference+=Math.abs(parseInt(userScores[j])-parseInt(friendsData[i].scores[j]));
      }
    }
  });

