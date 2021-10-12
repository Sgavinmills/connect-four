import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';


class ConnectFourGame {
    @tracked player;
    @tracked board;
    constructor() {
         this.player = 'x';
         this.board = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null]
          ]
    }

    getBoard() {
        return this.board;
    }

    // getPlayer() {
    //     return this.player;
    // }

    play(column) {
        for(let i = this.board.length-1; i >= 0; i--) {
            if(this.board[i][column] === null) {
                this.board[i][column] = this.player;
                this.player = this.player === 'x' ? 'o' : 'x';
                return;
            }
        }
        return 'This column is full';
    }

    checkWinner() {
        return findConnectFourWinner(this.board);
    }
}

export default class GameService extends Service {
    @tracked currentGame;
    @action newGame() {
        this.currentGame = new ConnectFourGame();
    }

    get getPlayer() {
        return this.currentGame.player;
    }
}
