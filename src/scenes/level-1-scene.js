import 'phaser';

export class LevelOneScene extends Phaser.Scene {
    constructor() {
        super('LevelOne');
    }

    preload() {
    }

    create() {
        this.add.text(10, 10, 'Уровень 1', { fill: '#ddd', fontSize: 12, fontFamily: 'Helvetica' });
    }
}