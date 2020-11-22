var readlineSync=require("readline-sync");
var userName=readlineSync.question("What is your Name ?  ");

console.log("Welcome "+userName+" , to DO YOU KNOW TANAY Show :)");
console.log()
score=0

function play(q,ans){
  console.log()
  var userAns=readlineSync.question(q);

  if (userAns.toLowerCase()===ans.toLowerCase()){
    console.log("You are Right :)")
    score+=1
  }else{
    console.log("You are Wrong :(")
    score-=1
  }
  console.log("Current SCORE :"+score);
  console.log("------------------")
}


q1={
  q:"Where do I leave ?  ",
  ans:"Bangalore"
}
q2={
  q:"My Favorite SuperHero would be ?  ",
  ans:"Dhruv"
}

q3={
  q:"Where do I work?  ",
  ans:"Microsoft"
}
var myQuestionsAre=[q1,q2,q3];

for (var i=0;i<myQuestionsAre.length;i++){
  var currentQ=myQuestionsAre[i];
  play(currentQ.q,currentQ.ans)
}


console.log("HURRAY !, You Finished Quiz")
console.log(userName+", You Scored :"+score)
console.log("Ty for Playing ,Bye :)")
