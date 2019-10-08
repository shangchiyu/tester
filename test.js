var myBandList = ["FooFighters", "Linkin Park", "Jewel", "U2"];
function addBands () {
   for(i=0; i< myBandList.length; i++){
    var ul =document.getElementById("band-list");
    var li = document.createElement("li"); 
     li.innerHTML= myBandList[i];
      ul.appendChild(li)
   }
  
}
addBands();

// function check(){
//    for(i=0; i< myBandList.length; i++){
//       if(myBandList[i]!= )
//    }

// }
function count(){
   var numbers = [1, 3, 5, 4, 2];
numbers.sort(function(a, b) {
  return a - b;
});
// console.log(numbers);

}
count();


var vote1 = [45, 4, 1]

function totalVotes(votes, num) {
  var total = 0;
  for (var i = 0; i < votes.length; i++) {
    total += votes[i];
  }
  return total;
}

// better alternative
// function tallyVotes(votes) {
//   return votes.reduce((total, vote) => total + vote, 0);
// }

console.log('for loop: ', totalVotes(vote1, 4));
// console.log('reduce: ', tallyVotes(vote1));


