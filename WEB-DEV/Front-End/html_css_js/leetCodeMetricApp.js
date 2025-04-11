document.addEventListener("DOMContentLoaded", function () {
  let searchButton = document.getElementById("submitButton");
  let userInput = document.getElementById("userName");
  let statsContainer = document.querySelector(".stats");
  let easyProgressCircle = document.querySelector(".easyProgress");
  let mediumProgressCircle = document.querySelector(".mediumProgress");
  let hardProgressCircle = document.querySelector(".hardProgress");
  let easyLabel = document.getElementById("easyLabel");
  let mediumLabel = document.getElementById("mediumLabel");
  let hardLabel = document.getElementById("hardLabel");
  let cardsStatsContainer = document.querySelector(".statsCards");

  let validateUserName = (userName) => {
    if (userName === "") {
      alert("Please enter a valid username");
      return false;
    }
    let regex = /^[a-zA-Z0-9_-]{1,15}$/;
    const isValid = regex.test(userName);
    if (!isValid) {
      alert("wrong username");
      return false;
    }
    return true;
  };
  //Data :  {status: 'success', message: 'retrieved', totalSolved: 16, totalQuestions: 3466, easySolved: 13, …}acceptanceRate: 47.92contributionPoints: 70easySolved: 13hardSolved: 1mediumSolved: 2message: "retrieved"ranking: 3413311reputation: 0status: "success"submissionCalendar: {1736121600: 6, 1736294400: 12, 1736380800: 8, 1736467200: 2, 1736726400: 3, 1736812800: 10, 1736985600: 5, 1737158400: 2}totalEasy: 861totalHard: 804totalMedium: 1801totalQuestions: 3466totalSolved: 16[[Prototype]]: Object

  function makeCard(data) {
    return `
        <div class="cards">
        <h3>${data.name}: ${data.value}</h3>
        </div>
        `;
  }
  function displayUserData(data) {
    let easy = data.easySolved;
    let medium = data.mediumSolved;
    let hard = data.hardSolved;
    let total = data.totalQuestions;
    let solved = data.totalSolved;
    let accuracy = ((solved / total) * 100).toFixed(2);
    let easytotal = data.totalEasy;
    let mediumtotal = data.totalMedium;
    let hardtotal = data.totalHard;
    let easyPercent = (easy / easytotal) * 100;
    let mediumPercent = (medium / mediumtotal) * 100;
    let hardPercent = (hard / hardtotal) * 100;
    easyProgressCircle.style.setProperty("--easy", `${easyPercent}%`);
    mediumProgressCircle.style.setProperty("--medium", `${mediumPercent}%`);
    hardProgressCircle.style.setProperty("--hard", `${hardPercent}%`);
    easyLabel.textContent = `${easy} /${easytotal}`;
    mediumLabel.textContent = `${medium} /${mediumtotal}`;
    hardLabel.textContent = `${hard} /${hardtotal}`;
    let statsCard = `
      ${makeCard({ name: "Acceptance Rate", value: data.acceptanceRate + "%" })}
        ${makeCard({ name: "Total Solved", value: data.totalSolved })}
        ${makeCard({ name: "Total Questions", value: data.totalQuestions })}
        ${makeCard({ name: "Ranking", value: data.ranking })}
        ${makeCard({ name: "Reputation", value: data.reputation })}
        ${makeCard({
          name: "Contribution Points",
          value: data.contributionPoints,
        })}
        ${makeCard({ name: "Accuracy", value: accuracy + "%" })}

      `;
    cardsStatsContainer.innerHTML = statsCard;
  }

  async function fetchUserStats(userName) {
    try {
      searchButton.disabled = true;
      searchButton.textContent = "Searching...";
      statsContainer.style.display = "none";
      let url = `https://leetcode-stats-api.herokuapp.com/${userName}`;
      let response = await fetch(url);
      if (!response.ok) {
        alert("User not found");
        return;
      }
      let data = await response.json();
      console.log("Data : ", data);
      displayUserData(data);
      return data;
    } catch (error) {
      console.log("Error : ", error);
      statsContainer.innerHTML = "<p>Something went wrong</p>";
    } finally {
      searchButton.disabled = false;
        searchButton.textContent = "Search";
        statsContainer.style.display = "block";
    }
  }

  function main() {
    let userName = userInput.value;
    console.log("UserName : ", userName);
    if (validateUserName(userName)) {
      fetchUserStats(userName);
    }
  }
  searchButton.addEventListener("click", main);
  userInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      main();
    }
  });
});
