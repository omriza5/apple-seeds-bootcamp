const johnsTeamScores = [89, 120, 103];
const mikesTeamScores = [116, 94, 123];

function scoresAvg(scores) {
  const sumOfScores = scores.reduce((acc, currentValue) => acc + currentValue);

  return sumOfScores / scores.length;
}

const johnsTeamAvg = scoresAvg(johnsTeamScores);
const mikesTeamAvg = scoresAvg(mikesTeamScores);

if (johnsTeamAvg > mikesTeamAvg)
  console.log("Johns Team is The Winner with Average of:", johnsTeamAvg);
else if (johnsTeamAvg < mikesTeamAvg)
  console.log("Mikes Team is The Winner with Average of:", mikesTeamAvg);
else console.log("Its A Draw:", johnsTeamAvg);
