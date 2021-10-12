import Component from '@glimmer/component';
import { action } from '@ember/object'
import { tracked } from '@glimmer/tracking';
import { findConnectFourWinner} from '../utils/findConnectFourWinner';


class ConnectFourGame {

    constructor() {
        this.player = 'red';
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

    getPlayer() {
        // console.log(this.player)
        return this.player;
    }

    play(column) {
        for(let i = this.board.length-1; i >= 0; i--) {
            if(this.board[i][column] === null) {
                this.board[i][column] = this.player;
                this.player = this.player === 'red' ? 'yel' : 'red';
                return;
            }
        }
        return 'This column is full';
    }

    checkWinner() {
        return findConnectFourWinner(this.board);
    }
}
export default class ConnectFourComponent extends Component {

    @tracked game = new ConnectFourGame();
    @tracked gameWinner = null;

    get player() {
        return this.game.getPlayer();
    }

    get board() {
        return this.game.getBoard();
    }

    @action checkWinner() {
        let winner = this.game.checkWinner();
        if(winner) {
            this.gameWinner = winner;
        }
    }

    get rowOne() {
        return this.game.getBoard()[0];
    }
    get rowTwo() {
        return this.game.getBoard()[1];
    }
    get rowThree() {
        return this.game.getBoard()[2];
    }
    get rowFour() {
        return this.game.getBoard()[3];
    }
    get rowFive() {
        return this.game.getBoard()[4];
    }
    get rowSix() {
        return this.game.getBoard()[5];
    }

    get isYellow() {
        return this.game.getPlayer() === 'yel';
    }

    get isRed() {
        // return this.game.getPlayer() === 'red';
        return false;
    }

    @action rown(n) {
        return this.game.getBoard()[n];
    }

    @action play(column) {
        this.game.play(column);
        this.game = this.game;
        this.checkWinner();
    }

    @action newGame() {
        this.game = new ConnectFourGame();
        this.game = this.game;
        this.gameWinner = null;
    }

}
