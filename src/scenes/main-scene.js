import 'phaser';

export class MainScene extends Phaser.Scene {
    constructor() {
        super('Main');
    }

    preload() {
        this.load.image('background', 'assets/img/background.jpg');
    }

    create() {
        this.add.image(0, 0, 'background').setOrigin(0, 0);
    }
}