class TicTacToe {
  constructor() {
    this.symbol1 = "o";
    this.symbol2 = "x";
    this.winner1 = "ooo";
    this.winner2 = "xxx";
    this.currentSymbol = "x";
    this.matrix = [[], [], []];
  }

  getCurrentPlayerSymbol() {
    return this.currentSymbol;
  }

  nextTurn(rowIndex, columnIndex) {
    // if symbol has already written on this position
    if(this.matrix[rowIndex][columnIndex]) return;

    this.matrix[rowIndex][columnIndex] = this.currentSymbol;
    if(this.currentSymbol === this.symbol1) {
        this.currentSymbol = this.symbol2;
    } else {
        this.currentSymbol = this.symbol1;
    }
  }

  isFinished() {
    if(this.getWinner() || this.isDraw()) return true;
    return false;
  }

  getWinner() {
    let testWinner1 = '';
    let testWinner2 = '';
    // check vertical and horizontal
    for(let i = 0; i < 3; i++) {
      testWinner1 = '';
      testWinner2 = '';
      for(let j = 0; j < 3; j++) {
        testWinner1 += this.matrix[i][j];
        testWinner2 += this.matrix[j][i];
      }
      if((this.winner1 === testWinner1) || (this.winner2 === testWinner1)) return testWinner1[0];
      if((this.winner1 === testWinner2) || (this.winner2 === testWinner2))  return testWinner2[0];
    }

    // check diagonals
    testWinner1 = '';
    testWinner2 = '';
    const z = 2
    for(let i = 0; i < 3; i++) {
        testWinner1 += this.matrix[i][i];
        testWinner2 += this.matrix[i][z - i];
    }
    if((this.winner1 === testWinner1) || (this.winner2 === testWinner1)) return testWinner1[0];
    if((this.winner1 === testWinner2) || (this.winner2 === testWinner2)) return testWinner2[0];

    return null;
  }

  noMoreTurns() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.matrix[i][j] === undefined) return false;
      }
    }
    return true;
  }

  isDraw() {
    if(!this.getWinner() && this.noMoreTurns()) return true;
    return false;
  }

  getFieldValue(rowIndex, colIndex) {
    if(this.matrix[rowIndex][colIndex]) return this.matrix[rowIndex][colIndex];
    return null;
  }
}

module.exports = TicTacToe;
