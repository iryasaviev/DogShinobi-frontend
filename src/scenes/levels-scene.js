import 'phaser';
import { Button } from '../elements/buttons';
import { LevelOneScene } from './level-1-scene';

export class LevelsScene extends Phaser.Scene {
    constructor() {
        super('Levels');
    }

    preload() {
    }

    create() {
        this.add.text(this.game.config.width - 135, this.game.config.height - 18, 'Created by ©Deadcaton', { fill: '#ddd', fontSize: 12, fontFamily: 'Helvetica' });

        this.createLevelsList();
        this.createBackButton();
    }

    createLevelsList() {
        let button = new Button(this);

        let levels = [],
            levelReduction = ['One', 'Two', 'three'];
        for (let a = 1; 1 >= a; a++) {
            levels[levels.length] = button.create('button', 50, 80, '- LEVEL ' + a, 40);

            for (let b = 0; levelReduction.length > b; b++) {
                if ((a - 1) === b) {
                    levels[a - 1][levels[a - 1].length - 1].on('pointerup', () => this.transitionTo('Level' + levelReduction[b], 'Level' + levelReduction[b] + 'Scene'));
                    break;
                }
            }
        }
    }

    createBackButton() {
        let button = new Button(this),
            backButton = button.create('link', 50, this.game.config.height - 50, '← Back', 24);

        backButton[0].on('pointerup', () => this.transitionTo('Main', 'MainScene'));
    }

    transitionTo(toScene, sceneClass) {
        switch (sceneClass) {
            case 'LevelOneScene':
                this.scene.add(toScene, LevelOneScene);
                break;
            case 'Main':
                this.scene.switch('Main');
                break;
        }

        this.scene.start(toScene);
    }
}