const VALID_KEYS = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Enter", " "];

export class InputHandler {
  constructor(game) {
    this.game = game;
    this.keys = [];
    window.addEventListener("keydown", ({ key }) => {
      if (VALID_KEYS.includes(key) && this.keys.indexOf(key) === -1) {
        this.keys.push(key);
      } else if (key === "d") this.game.debug = !this.game.debug;
    });
    window.addEventListener("keyup", ({ key }) => {
      if (VALID_KEYS.includes(key)) {
        this.keys.splice(this.keys.indexOf(key), 1);
      }
    });
  }
}
