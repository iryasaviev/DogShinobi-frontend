import 'phaser';
import { Button } from '../elements/buttons';
import { LevelsScene } from './levels-scene';

export class MainScene extends Phaser.Scene {
    constructor() {
        super('Main');
    }

    preload() {
    }

    create() {
        this.add.text(this.game.config.width - 135, this.game.config.height - 18, 'Created by ©Deadcaton', { fill: '#ddd', fontSize: 12, fontFamily: 'Helvetica' });
        this.createMenu();
    }

    createMenu(game) {
        let button = new Button(this);

        let startButton = button.create('button', 50, 80, 'START', 60),
            ratingButton = button.create('button', 50, 180, 'RATING', 60),
            settingsButton = button.create('button', 50, 280, 'OPTIONS', 60),
            contactsButton = button.create('button', 50, 380, 'CONTACTS', 60),
            donateButton = button.create('button', 50, 480, 'DONATE', 60);

        startButton[startButton.length - 1].on('pointerup', () => this.transitionFromButton('Levels'));
    }

    transitionFromButton(toScene) {
        this.scene.add(toScene, LevelsScene);
        this.scene.start(toScene);
    }
}