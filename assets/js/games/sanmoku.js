$(function(){
  // ターン初期設定
  turn = 1;
  list = $("td");
  $(".text").text("Your turn");
  $("td").click(function(){
    // ユーザーのアクション
    choice = $(this);
    $(choice).addClass("maru");
    turn_action();
    // CPUのアクション
    if (judge()==true) {
      $("table").addClass("noclick");
      // ランダムでマスを選択
      choice = list[Math.floor(Math.random() * list.length)];
      setTimeout(function(){
        $(choice).addClass("batu");
        turn_action();
        $("table").removeClass("noclick");
      },500);
    }
  });
  $(".reset").click(function(){
    reset();
  });
  function turn_action() {
    if (turn%2==1) {
      $(".text").text("CPU's turn ");
    } else {
      $(".text").text("Your turn");
    }
    turn++;
    list_del();
    judge();
    if (judge()==false) {
      $(".text").text();
      $(".reset_wrap").css("display","inline-block");
    }
  }
  function list_del() {
    // 配列からチェック済みマスを削除
    list.each(function(i,v){
      if ($(v).hasClass("maru") || $(v).hasClass("batu")) {
        list.splice(i, 1);
      }
    });
  }
  function judge() {
    if($(".td1").hasClass("maru")&&$(".td2").hasClass("maru")&&$(".td3").hasClass("maru")){
      $("table").addClass("win");
      return false;
    }else if($(".td4").hasClass("maru")&&$(".td5").hasClass("maru")&&$(".td6").hasClass("maru")){
      $("table").addClass("win");
      return false;
    }else if($(".td7").hasClass("maru")&&$(".td8").hasClass("maru")&&$(".td9").hasClass("maru")){
      $("table").addClass("win");
      return false;
    }else if($(".td1").hasClass("maru")&&$(".td4").hasClass("maru")&&$(".td7").hasClass("maru")){
      $("table").addClass("win");
      return false;
    }else if($(".td2").hasClass("maru")&&$(".td5").hasClass("maru")&&$(".td8").hasClass("maru")){
      $("table").addClass("win");
      return false;
    }else if($(".td3").hasClass("maru")&&$(".td6").hasClass("maru")&&$(".td9").hasClass("maru")){
      $("table").addClass("win");
      return false;
    }else if($(".td1").hasClass("maru")&&$(".td5").hasClass("maru")&&$(".td9").hasClass("maru")){
      $("table").addClass("win");
      return false;
    }else if($(".td3").hasClass("maru")&&$(".td5").hasClass("maru")&&$(".td7").hasClass("maru")){
      $("table").addClass("win");
      return false;
    }else if($(".td1").hasClass("batu")&&$(".td2").hasClass("batu")&&$(".td3").hasClass("batu")){
      $("table").addClass("lose");
      return false;
    }else if($(".td4").hasClass("batu")&&$(".td5").hasClass("batu")&&$(".td6").hasClass("batu")){
      $("table").addClass("lose");
      return false;
    }else if($(".td7").hasClass("batu")&&$(".td8").hasClass("batu")&&$(".td9").hasClass("batu")){
      $("table").addClass("lose");
      return false;
    }else if($(".td1").hasClass("batu")&&$(".td4").hasClass("batu")&&$(".td7").hasClass("batu")){
      $("table").addClass("lose");
      return false;
    }else if($(".td2").hasClass("batu")&&$(".td5").hasClass("batu")&&$(".td8").hasClass("batu")){
      $("table").addClass("lose");
      return false;
    }else if($(".td3").hasClass("batu")&&$(".td6").hasClass("batu")&&$(".td9").hasClass("batu")){
      $("table").addClass("lose");
      return false;
    }else if($(".td1").hasClass("batu")&&$(".td5").hasClass("batu")&&$(".td9").hasClass("batu")){
      $("table").addClass("lose");
      return false;
    }else if($(".td3").hasClass("batu")&&$(".td5").hasClass("batu")&&$(".td7").hasClass("batu")){
      $("table").addClass("lose");
      return false;
    }else if(list.length==0){
      $("table").addClass("draw");
      return false;
    } else {
      return true;
    }
  }
  function reset() {
    $("table").removeClass();
    $("td").removeClass("maru batu");
    // ターン初期設定
    turn = 1;
    list = $("td");
    $(".text").text("Your turn");
    $(".reset_wrap").hide();
  }
});
