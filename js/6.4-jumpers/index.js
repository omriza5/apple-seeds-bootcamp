const JUMP_REPRESENTIVE = 3;
const acrobatJumps = [5, 5, 8, 7, -1, 5];

function avgJumper(jumps) {
  const jumpsPerPlayer = divideJumpers(jumps);
  const filteredJumps = removeUnacceptableJumps(jumpsPerPlayer);

  const avgs = [];

  filteredJumps.forEach((playerJumps) => {
    let sum = playerJumps.reduce((a, b) => a + b);

    avgs.push(sum / playerJumps.length);
  });

  return avgs;
}

function bestAvgJump(jumpAvgs) {
  return Math.max(...jumpAvgs);
}

function bestJump(jumps) {
  return Math.max(...jumps);
}

/* this function takes an array of jumps and returns array of jumps arrays
    e.g => [5, 5, 8, 7, -1, 5] will be [[5, 5, 8,], [7, -1, 5]]
*/
function divideJumpers(jumps) {
  const iterationLimit = jumps.length / JUMP_REPRESENTIVE;
  let jump = 0;
  let playersJumps = [];
  for (let i = 0; i < iterationLimit; i++) {
    playersJumps.push(jumps.slice(jump, jump + 3));
    jump = jump + 3;
  }

  return playersJumps;
}

/* removes the Unacceptable jumps (-1) from a given array 
    [[5, 5, 8,], [7, -1, 5]] ==> [[5, 5, 8,], [7, 5]]
*/
function removeUnacceptableJumps(jumps) {
  return jumps.map((jumpArr) => jumpArr.filter((j) => j >= 0));
}

const avgs = avgJumper(acrobatJumps); //[6,6]
const baj = bestAvgJump(avgs); // 6
const bj = bestJump(acrobatJumps); // 8
