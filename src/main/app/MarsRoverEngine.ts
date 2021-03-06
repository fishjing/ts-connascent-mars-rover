import {Position} from "../model/Position";
import {ICommand} from "../commands/ICommand";
import { Coordinate } from '../model/Coordinate';

export class MarsRoverEngine {
    private position: Position = new Position(new Coordinate({x: 0, y: 0}), 'N');

    execute(commands: Array<ICommand>): void {
        for (let command of commands) {
            this.position = command.execute(this.position);
        }
    }
    getPosition(): Position {
        return this.position;
    }


}
