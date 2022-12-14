function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}

let delay = -0.3
function createCard(date, day, games) {
  delay = delay + 0.3
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
        <ul>
          ${games}
        </ul>
        </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("24/11", "quinta", createGame("brazil", "16:00", "serbia") + createGame("switzerland", "07:00", "cameroon")) +
  createCard("28/11", "segunda", createGame("switzerland", "13:00", "brazil") + createGame("portugal", "13:00", "uruguay")) +
  createCard("01/12", "quinta", createGame("brazil", "16:00", "cameroon") + createGame("serbia", "16:00", "switzerland")) + 
  createCard("02/12", "sexta", createGame("hungary", "16:00", "japan") + createGame("colombia", "16:00", "switzerland"))