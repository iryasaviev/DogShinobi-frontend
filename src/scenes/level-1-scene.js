import 'phaser';

export class LevelOneScene extends Phaser.Scene {
    constructor() {
        super('LevelOne');
    }

    preload() {
        this.load.tilemapTiledJSON('map-data', 'assets/levels/level-1/maps/map.json');
        this.load.image('map_tiles', 'assets/img/map_tiles.png');
    }

    create() {
        this.add.text(10, 10, 'Уровень 1', { fill: '#ddd', fontSize: 12, fontFamily: 'Helvetica' });

        let map = this.add.tilemap('map-data');
        map.addTilesetImage('map', 'map_tiles');

        // console.log(map);
        console.log(map.layer);
        console.log(map.layers);

        let layer = map.createStaticLayer('layer'),
            layer1 = map.createStaticLayer('layer1'),
            layer2 = map.createStaticLayer('layer2'),
            layer3 = map.createStaticLayer('layer3'),
            layer4 = map.createStaticLayer('layer4');
        // layer.resizeWorld();
    }
}