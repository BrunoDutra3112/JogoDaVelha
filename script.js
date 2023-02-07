const ticTacToe = document.querySelector("#tic-tac-toe");
const cells = ticTacToe.querySelectorAll("td");
const resetButton = document.querySelector("#reset-button");
const winnerMessage = document.querySelector("#winner");
let turn = "X";

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function() {
    if (this.textContent === "") {
      this.textContent = turn;
      turn = turn === "X" ? "O" : "X";
    }

    if (checkForWin()) {
      winnerMessage.textContent = `JOGADOR < ${turn === "X" ? "O" : "X"} > GANHOU!!!`;
      for (let j = 0; j < cells.length; j++) {
        cells[j].removeEventListener("click", function() {});
      }
    }
  });
}

resetButton.addEventListener("click", function() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
    cells[i].addEventListener("click", function() {
      if (this.textContent === "") {
        this.textContent = turn;
        turn = turn === "X" ? "O" : "X";
      }
    });
  }
  winnerMessage.textContent = "";
  turn = "X";
});

function checkForWin() {
  return (
    cells[0].textContent === cells[1].textContent &&
    cells[1].textContent === cells[2].textContent &&
    cells[0].textContent !== "" ||
    cells[3].textContent === cells[4].textContent &&
    cells[4].textContent === cells[5].textContent &&
    cells[3].textContent !== "" ||
    cells[6].textContent === cells[7].textContent &&
    cells[7].textContent === cells[8].textContent &&
    cells[6].textContent !== "" ||
    cells[0].textContent === cells[3].textContent &&
    cells[3].textContent === cells[6].textContent &&
    cells[0].textContent !== "" ||
    cells[1].textContent === cells[4].textContent &&
    cells[4].textContent === cells[7].textContent &&
    cells[1].textContent !== "" ||
    cells[2].textContent === cells[5].textContent &&
    cells[5].textContent === cells[8].textContent &&
    cells[2].textContent !== "" ||
    cells[0].textContent === cells[4].textContent &&
    cells[4].textContent === cells[8].textContent &&
    cells[0].textContent !== "" ||
    cells[2].textContent === cells[4].textContent &&
    cells[4].textContent === cells[6].textContent &&
    cells[2].textContent !== ""
  );
}
