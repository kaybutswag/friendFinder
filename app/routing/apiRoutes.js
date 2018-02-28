var friendsData = require("../data/friends.js");

module.exports = function(app) {
 // console.log(friendsData);
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });



  app.post("/api/friends", function(req, res) {
    console.log("hitting server side");

    var userData = req.body;
    // var userName = userData.name;
    // var userPhoto = userData.photo;
    var userScores=userData.scores;
    var totalDifference = 0;
    var difArray=[];
    var match={
      "matchname":"",
      "matchphoto":"",
      "matchblurb":""
    };

console.log(userData);
console.log(userScores);
console.log(friendsData[0].scores);
console.log(friendsData[0]);
//looks through options
    for(var i=0; i<friendsData.length;i++){
      totalDifference=0;
//looks at each answer
      for(var j=0;j<4;j++){
        totalDifference+=Math.abs(parseInt(userScores[j])-parseInt(friendsData[i].scores[j]));
        friendsData[i].menteeDifference = totalDifference;
      }
      console.log(friendsData[i].menteeDifference);
    }
//this is sorting options by difference.
      friendsData.sort(function(a,b){
        return a.menteeDifference-b.menteeDifference;
      });
//returns top match
      match.matchname=friendsData[0].name;
      match.matchphoto=friendsData[0].photo;
      match.matchblurb=friendsData[0].blurb;

      // friendsData.push(match);
       res.send(match);
  });

};

