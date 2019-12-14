import 'phaser';

export class LevelOneScene extends Phaser.Scene {
    constructor() {
        super('LevelOne');
    }

    preload() {
        this.load.tilemapTiledJSON('map', 'assets/levels/level-1/maps/map.json');
        this.load.spritesheet('map_tiles', 'assets/img/map_tiles.png', { frameWidth: 64, frameHeight: 64 });
    }

    create() {
        this.add.text(10, 10, 'Уровень 1', { fill: '#ddd', fontSize: 12, fontFamily: 'Helvetica' });

        // , 32, 32, 64, 32
        // let map = this.add.tilemap('map');
        // map.addTilesetImage('map_tiles', 'map_tiles');

        let map = this.make.tilemap({ key: 'map' });
        let tileset = map.addTilesetImage('map_tiles', 'map_tiles');

        // console.log(map);
        console.log(map.layer);
        console.log(map.layers);

        let layer = map.createStaticLayer('layer', tileset),
            layer1 = map.createStaticLayer('layer1', tileset),
            layer2 = map.createStaticLayer('layer2', tileset),
            layer3 = map.createStaticLayer('layer3', tileset),
            layer4 = map.createStaticLayer('layer4', tileset);


        // layer.resizeWorld();
    }
}