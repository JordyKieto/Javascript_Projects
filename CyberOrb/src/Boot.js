var Ball = {
    _WIDTH: 320,
    _HEIGHT: 480
};
// this is a function declartion
Ball.Boot = function(game) {};
Ball.Boot.prototype = {
    preload: function() {
        this.load.image('preloaderBg', 'img/loading-bg.png');
        this.load.image('preloaderBar', 'img/loading-bar.png');
    },
    create: function() {
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        this.game.state.start('Preloader');
    }
};

// The main ball object is defined Width / Height
// we load two images that will be used in preload state
// create function holds basic config