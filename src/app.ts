import "phaser";
import { GameScene } from "./gameScene";
import { WelcomeScene } from "./welcomeScene";
import { ScoreScene } from "./scoreScene";

interface GameConfig {
  title: string;
  width: integer;
  height: integer;
  parent: string;
  scene: Array<any>;
  physics: object;
  backgroundColor: string;
}
const config: GameConfig = {
  title: "Starfall",
  width: 800,
  height: 600,
  parent: "game",
  scene: [WelcomeScene, GameScene, ScoreScene],
  physics: {
    default: "arcade",
    arcade: {
      debug: false
    }
  },
  backgroundColor: "#18216D"
};
export class StarfallGame extends Phaser.Game {
  constructor(config: GameConfig) {
    super(config);
  }
}
window.onload = () => {
  const game = new StarfallGame(config);
};