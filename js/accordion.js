/* !accordion flag --------------------------------------------------- */
$(function() {
  var $accBtn = $('.p-sec02--info-btn'),
      $accContents = $('.p-sec02--info-conts');

  $accContents.hide(); //contentsを全て隠す
  $accBtn.each(function() {
    var flag = "close"; //flagを初期値を設定
    $(this).click(function(e) {
      e.preventDefault(); //aタグのリンク無効化
      $(this).next().slideToggle(); //すぐ次の要素をスライド

      if(flag == "close"){ //もしflagがcloseだったら
        $(this).text("詳しい情報を閉じる");
        flag = "open"; //flagをopenにする
      }
      else{ //もしflagがopenだったら
        $(this).text("詳しい情報を見る");
        flag = "close"; //flagをcloseにする
      }
    });
  });
});

$(function() {
  var $accBtn = $('.p-sec03--info-btn'),
      $accContents = $('.p-sec03--info-conts');

  $accContents.hide(); //contentsを全て隠す
  $accBtn.each(function() {
    var flag = "close"; //flagを初期値を設定
    $(this).click(function(e) {
      e.preventDefault(); //aタグのリンク無効化
      $(this).next().slideToggle(); //すぐ次の要素をスライド

      if(flag == "close"){ //もしflagがcloseだったら
        $(this).text("詳しい情報を閉じる");
        flag = "open"; //flagをopenにする
      }
      else{ //もしflagがopenだったら
        $(this).text("詳しい情報を見る");
        flag = "close"; //flagをcloseにする
      }
    });
  });
});
