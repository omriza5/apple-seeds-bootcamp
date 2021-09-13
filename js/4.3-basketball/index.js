const johnsTeamScores = [89, 120, 103];
const mikesTeamScores = [116, 94, 123];
const maryTeamScores = [79, 134, 105];

function displayWinner(johnsTeamScores, mikesTeamScores, maryTeamScores) {
  const johnsTeamAvg = scoresAvg(johnsTeamScores);
  const mikesTeamAvg = scoresAvg(mikesTeamScores);
  const maryTeamAvg = scoresAvg(maryTeamScores);

  const maxAvg = getMaxAvg(johnsTeamAvg, mikesTeamAvg, maryTeamAvg);

  if (maxAvg === johnsTeamAvg)
    console.log("Johns Team is The Winner with Average of:", johnsTeamAvg);
  else if (maxAvg === mikesTeamAvg)
    console.log("Mikes Team is The Winner with Average of:", mikesTeamAvg);
  else if (maxAvg === maryTeamAvg)
    console.log("Mary Team is The Winner with Average of:", maryTeamAvg);
  else console.log("Its A Draw:", johnsTeamAvg);
}

function scoresAvg(scores) {
  const sumOfScores = scores.reduce((acc, currentValue) => acc + currentValue);

  return sumOfScores / scores.length;
}

function getMaxAvg(...args) {
  return Math.max(...args);
}

displayWinner(johnsTeamScores, mikesTeamScores, maryTeamScores);
