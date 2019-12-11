/**
 * Class for interaction with buttons.
 */
export class Button {
    constructor(scene) {
        this.scene = scene
    }

    /**
     * Method for creating a button or link.
     * @param {*} type button type.
     * @param {*} x X button coordinate.
     * @param {*} y Y button coordinate.
     * @param {*} text display text.
     * @param {*} size font size.
     * @param {*} color text color.
     */
    create(type = 'button', x, y, text, size, color = '#20d6f4') {
        let button = [];

        switch (type) {
            case 'button':
                button = [
                    this.scene.add.text(x, y, text, { fill: '#20d6f4', fontSize: size, fontFamily: 'Helvetica' }),
                    this.scene.add.text(x - 2, y + 2, text, { fill: '#0fff00', fontSize: size, fontFamily: 'Helvetica' }),
                    this.scene.add.text(x - 3, y + 3, text, { fill: '#ff0000', fontSize: size, fontFamily: 'Helvetica' }),
                    this.scene.add.text(x - 4, y + 4, text, { fill: '#e71fff', fontSize: size, fontFamily: 'Helvetica' })
                ];

                button[button.length - 1]
                    .setInteractive()
                    .on('pointerover', () => this.over('button', button))
                    .on('pointerout', () => this.out('button', button))
                    .on('pointerdown', () => this.down('button', button))
                    .on('pointerup', () => this.up('button', button));
                break;

            case 'link':
                break;
        }

        return button;
    }

    over(type, button) {
        switch (type) {
            case 'button':
                button[button.length - 3].y -= 1;
                button[button.length - 2].y -= 2;
                button[button.length - 1].y -= 3;

                button[button.length - 3].x += 1;
                button[button.length - 2].x += 2;
                button[button.length - 1].x += 3;
                break;

            case 'link':
                break;
        }
    }

    out(type, button) {
        switch (type) {
            case 'button':
                button[button.length - 3].y += 1;
                button[button.length - 2].y += 2;
                button[button.length - 1].y += 3;

                button[button.length - 3].x -= 1;
                button[button.length - 2].x -= 2;
                button[button.length - 1].x -= 3;

                button[0].setStyle({ backgroundColor: '' })
                break;

            case 'link':
                break;
        }
    }

    down(type, button) {
        switch (type) {
            case 'button':
                button[0].setStyle({ backgroundColor: 'rgba(32, 214, 244, 0.85)' });
                break;

            case 'link':
                break;
        }
    }

    up(type, button) {
        switch (type) {
            case 'button':
                button[0].setStyle({ backgroundColor: '' })
                break;

            case 'link':
                break;
        }
    }
}