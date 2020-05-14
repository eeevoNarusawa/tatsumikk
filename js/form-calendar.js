//来場予約などのフォームで、火曜日、当日、次の日、そして任意のページを選択できなくする。

// yyyy/mm/dd 形式で、日付を文字列に変換する。
function formatDate(date){
  return date.getFullYear() +"/"+ (date.getMonth()+1) +"/"+ date.getDate();
}

//日付っぽい文字列どうしが正しいかどうか。  2019/01/1 == 2019/1/01 となる。
function compareDate(dateA, dateB){
    console.log("compare " + dateA + " " + dateB);
    var dateAmatch = dateA.match(/(\d+)\/(\d+)\/(\d+)/);
    yearA =  parseInt(dateAmatch[1]);
    monthA=  parseInt(dateAmatch[2]);
    dateA =  parseInt(dateAmatch[3]);

    var dateBmatch = dateB.match(/(\d+)\/(\d+)\/(\d+)/);
    yearB =  parseInt(dateBmatch[1]);
    monthB=  parseInt(dateBmatch[2]);
    dateB =  parseInt(dateBmatch[3]);

    var res = (yearA === yearB && monthA === monthB && dateA === dateB);

    console.log(res);
    return res;
}

function isHoliday(date){
  var holidays = [
    //ここに選択不可能にしたい休日を入れる。 yyyy/mm/ddのフォーマットで。

    //2019年末
    /*
    "2019/12/30",
    "2019/12/31",
    "2020/1/1",
    "2020/1/2",
    "2020/1/3",
    */
  ];

  var ret = false;
  var ishol = holidays.reduce(function(ishol, holiday){
    ishol = ishol || compareDate(formatDate(date), holiday);
    return ishol;
  } ,false);
  return ishol;
}

$(function() {

  $input_hiduke = $("input[name='日付']");
  $input_hiduke.datepicker({
    dateFormat: 'yy/mm/dd',
    minDate: '+1d'
  });

	$input_hiduke.attr("readonly", "readonly");

  $input_hiduke.datepicker('option','beforeShowDay',function(date){
    console.log(date);
    console.log("->");
    console.log(formatDate(date));
    console.log();

    //なぜか[]の中に入れなきゃいけない仕様らしい
    //falseが返されると、disableになるっぽい
    var ret = [!( //以下の条件のいずれかを満たしていれば休日なので、falseを返す
      date.getDay() == 3 || //水曜日
      isHoliday(date) //特別な休日か
    )];

    return ret;
  });
});
