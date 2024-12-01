// Fetch JSON data and populate leaderboard
async function loadLeaderboard() {
  const response = await fetch('data/leaderboard.json');
  const data = await response.json();

  const weeklyList = document.getElementById('weekly-list');
  const monthlyList = document.getElementById('monthly-list');

  if (weeklyList && monthlyList) {
    weeklyList.innerHTML = data.weekly.map(player =>
      `<li>${player.name} - ${player.score} pts</li>`
    ).join('');

    monthlyList.innerHTML = data.monthly.map(player =>
      `<li>${player.name} - ${player.score} pts</li>`
    ).join('');
  }
}

// Handle raffle entry
async function handleRaffleEntry(e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const wallet = document.getElementById('wallet').value;

  const response = await fetch('data/raffle-entries.json');
  const data = await response.json();

  data.entries.push({ username, wallet });

  // Save to JSON file (simulated for demo purposes)
  console.log('Updated Entries:', data.entries);
  alert('Entry submitted successfully!');
}

// Pick a random winner
function pickWinner() {
  fetch('data/raffle-entries.json')
    .then(res => res.json())
    .then(data => {
      const entrants = data.entries;
      const winner = entrants[Math.floor(Math.random() * entrants.length)];
      document.getElementById('winner').textContent =
        `Winner: ${winner.username} (${winner.wallet})`;
    });
}

// Countdown timer
function startCountdown() {
  let countdown = 3600; // 1 hour
  const timer = document.getElementById('timer');

  setInterval(() => {
    if (countdown > 0) {
      countdown--;
      const hours = String(Math.floor(countdown / 3600)).padStart(2, '0');
      const minutes = String(Math.floor((countdown % 3600) / 60)).padStart(2, '0');
      const seconds = String(countdown % 60).padStart(2, '0');
      timer.textContent = `${hours}:${minutes}:${seconds}`;
    }
  }, 1000);
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  loadLeaderboard();
  startCountdown();

  const raffleForm = document.getElementById('raffle-form');
  if (raffleForm) raffleForm.addEventListener('submit', handleRaffleEntry);

  const pickWinnerBtn = document.getElementById('pick-winner');
  if (pickWinnerBtn) pickWinnerBtn.addEventListener('click', pickWinner);
});
