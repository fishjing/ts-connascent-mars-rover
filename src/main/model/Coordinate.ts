import { format } from "util";

export class Coordinate {
  x: number;
  y: number;

  constructor({ x, y }: { x: number; y: number }) {
    //Connascence of Position
    this.x = x;
    this.y = y;
  }

  moveNorth(): Coordinate {
    return new Coordinate({ x: this.x, y: this.y + 1 });
  }

  moveEast(): Coordinate {
    return new Coordinate({ x: this.x + 1, y: this.y });
  }

  moveSouth(): Coordinate {
    return new Coordinate({ x: this.x, y: this.y - 1 });
  }

  moveWest(): Coordinate {
    return new Coordinate({ x: this.x - 1, y: this.y });
  }

  toString(): string {
    //Connascence of Position
    return format("%s %s", this.x, this.y);
  }
}
