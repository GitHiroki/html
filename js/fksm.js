//画面がリサイズされたときに処理するイベントハンドラ
var timer = 0;
window.onresize = function () {
    //イベントハンドラ実行中にイベントハンドラが呼ばれた場合は、
    //タイマをセットし直す
    if (timer > 0) {
        clearTimeout(timer);
    }
    
    //画面がリサイズされている間ずっとイベントが発生してしまう
    //タイマを用いてリサイズが完了したときに処理を実行するようにする
    timer = setTimeout(function() {
        //ここに処理を書く
        var memo = document.getElementById("memo");
        memo.style.height = window.innerHeight + "px";
        memo.style.width = window.innerWidth + "px";
        console.log("aaa");
    }, 200);
};