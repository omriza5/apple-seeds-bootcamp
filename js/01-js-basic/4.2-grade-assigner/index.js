function displayGrade(score) {
  if (score < 0 || typeof score !== "number")
    return "Please type a number between 0 and 100";

  if (score >= 0 && score < 65) return "F";
  else if (score >= 65 && score < 70) return "D";
  else if (score >= 70 && score < 80) return "C";
  else if (score >= 80 && score < 90) return "B";
  else return "A";
}

console.log(displayGrade(89));
