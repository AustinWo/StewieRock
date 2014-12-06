//Everytime a button is clicked, get the result of comparison
$("#rock").click(function() {
  usrChoice = 'rock';
  getResult();
});
$("#paper").click(function() {
  usrChoice = 'paper';
  getResult();
});
$("#scissors").click(function() {
  usrChoice = 'scissors';
  getResult();
});

//array to keep track of play result
var arr = [];

function getResult() {
  var comChoise, x;

  //randomize the comChoice
  x = Math.floor(Math.random()*3);
  if (x === 0) {comChoice = 'rock';}
  else if (x === 1) {comChoice = 'paper';}
  else {comChoice = 'scissors';};
  $("#usrPick").text('You picked : '+usrChoice);
  $("#comPick").text('Computer picked : '+comChoice);

  //display the outcome of the game by comparing usrChoice and comChoice
  if (usrChoice === comChoice) {outcome = 'It\'s a draw';}
  else if ((usrChoice === 'rock' && comChoice === 'paper') || (usrChoice === 'paper' && comChoice === 'scissors')
    || (usrChoice === 'scissors' && comChoice === 'rock')) {outcome = 'You lost, try again?';}
  else if ((usrChoice === 'rock' && comChoice === 'scissors') || (usrChoice === 'paper' && comChoice === 'rock')
    || (usrChoice === 'scissors' && comChoice === 'paper')) {outcome = 'YOU WIN!'}
  $("#result").text(outcome);

  //show pic according to the outcome, hide the previous pic
  $("img").hide();
  if (outcome === 'YOU WIN!') $("#victory").show()
  else if (outcome === 'You lost, try again?') $("#lost").show()
  else $("#draw").show();

  // push the result to the array, also append to show on screen.
  if (outcome === 'YOU WIN!') {
    arr.push('WIN');
    $("#history").append('WIN ');
  }
  else if (outcome === 'You lost, try again?') {
    arr.push('LOST');
    $("#history").append('LOST ');
  }
  else {
    arr.push('DRAW');
    $("#history").append('DRAW ');
  }

  //functions used to filter arrays
  function calWins(element) {
    return element === 'WIN';
  }
  function calLosts(element) {
    return element === 'LOST';
  }
  function calDraws(element) {
    return element === 'DRAW';
  }

  // Filter the array of outcomes to get saparate arrays, each containing only wins, losts, and draws. Then use .length method to get the number of each outcome.
  // This is a much less efficient way to find the number of each outcome, but I wanted to practice using .filter() method on an array.
  // A more efficient way would be to simply set variables to account for # of each outcome then increase by 1 everytime that outcome occurs
  var winArr = arr.filter(calWins);
  var lostArr = arr.filter(calLosts);
  var drawArr = arr.filter(calDraws);

  //find the length of each array to get total number of each outcomes
  $("#numWins").text('Number of Wins : '+ winArr.length);
  $("#numLosts").text('Number of Lost : '+ lostArr.length);
  $("#numDraws").text('Number of Draws : '+ drawArr.length);
}
