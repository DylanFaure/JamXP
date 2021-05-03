Window_Base.prototype.standardFontFace = function() {
    if ($gameSystem.isChinese()) {
        return 'GameFont';
    } else if ($gameSystem.isKorean()) {
        return 'Dotum, AppleGothic, sans-serif';
    } else {
        return 'GameFont';
    }
}; //rpg_windows.js 39

Window_Base.prototype.standardFontSize = function() {
    return 24;
}; //rpg_windows.js 49

Sprite_Timer.prototype.createBitmap = function() {
    this.bitmap = new Bitmap(96, 48); //計時器顯示寬高
    this.bitmap.fontSize = 24;
}; //rpg_sprites.js 2012

Sprite_Timer.prototype.updatePosition = function() {
    // this.x = Graphics.width - this.bitmap.width;
    this.x = (Graphics.width - this.bitmap.width)/2;
    this.y = 36;
}; //rpg_sprites.js 2045