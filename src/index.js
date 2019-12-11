import 'phaser';
import { Screen } from './screen/screen';
import { Config } from './config/config'
import { MainScene } from './scenes/main-scene';

var config = new Config(new Screen().width, new Screen().height);

config.physics = {
    default: 'arcade',
    arcade: {
        gravity: { y: 300 },
        debug: false
    }
};


class Game extends Phaser.Game {
    constructor() {
        super(config);
        this.scene.add('Main', MainScene);
        this.scene.start('Main');
    }
}

window.onload = function () {
    window.game = new Game();
};