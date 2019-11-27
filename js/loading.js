window.addEventListener("load",function(){
  var xhr = new XMLHttpRequest();
  xhr.onprogress = function (e) {
    console.log("e.total:", e.total);
    console.log("e.loaded:", e.loaded);
    console.log(e.total * 100 / e.loaded);
    var loadedCount = Math.floor(e.total * 100 / e.loaded);
    $("#loadingPercent").html((loadedCount) + "%");
    $("#logo_left_left").css("left", -(loadedCount) + "%");
  }

  xhr.onloadend = function(e){ 
    $("#loading").delay(1150).fadeOut(700);
  }

  xhr.open("get",location.href,true);
  xhr.send(null);
});