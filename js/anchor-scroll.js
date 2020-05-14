
//アンカーリンクを踏んだときにスムーズスクロールをする機能。
//同一ページならば、そのままスクロール。 他ページからの直接リンクでも、同様にスクロールする。
//ヘッダーがあるため、そのヘッダーの高さを考慮してスクロールしてくれる。
//全ページに読み込まれることを想定している。

//ページロード時に、URLの#がある場合にはスクロールする。
function checkAnchor(){
    var urlHash = location.hash;
    //ハッシュ値があればページ内スクロール
    if(urlHash) {
    //スクロールを0に戻すのはやめた。
    //$('body,html').stop().scrollTop(0);

    setTimeout(function () {
        //ロード時の処理を待ち、時間差でスクロール実行
        scrollToAnker(urlHash) ;
    }, 100);
    }
}


// 関数：スムーススクロール
// 指定したアンカー(#ID)へアニメーションでスクロール
function scrollToAnker(hash) {
    var headerHeight =  0; //固定ヘッダーがある場合は数値を指定
    var target = $(hash);

    if(target[0]){
        var position = target.offset().top - headerHeight;
        $('body,html').stop().animate({scrollTop:position}, 500);
    }
    else{
    console.log("hash" + hash + "が見つかりません")

    }
}

// a要素のクリック時にセット
function setAnchorClickEvent(){
    //通常のクリック時
    $('a[href^="#"]').click(function() {
    //ページ内リンク先を取得
    var href= $(this).attr("href");
    //リンク先が#か空だったらhtmlに
    var hash = href == "#" || href == "" ? 'html' : href;
    //スクロール実行
    scrollToAnker(hash);
    //リンク無効化
    return false;
    });
}

$(document).ready(function(){
    //URLのハッシュ値を取得
    checkAnchor();
    setAnchorClickEvent();
});