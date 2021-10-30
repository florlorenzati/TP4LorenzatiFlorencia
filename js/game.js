const config = {
    title: 'Tunel de Viento',

    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#d69032',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 9.8 },
            debug: false,
        }
    },
    scene: [Scene1]
};

new Phaser.Game(config);
