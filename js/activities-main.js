function init(){
  function id(id){
    return document.getElementById(id);
  }

  //-------腳步移動動畫
  let smController = new ScrollMagic.Controller();

  let pawAnime = TweenMax.staggerFromTo('.paw', .2, {
    opacity: 0,
  }, {
    opacity: 1,
  }, .5);

  //---------依頁面標題載入function
  switch (document.title) {
    case "活動專區--鏟屎官":
      pawsMove();
      changeActsSort();
      actsBanner();
      break;
  
    case "活動內容--鏟屎官":
      pawsMove2();
      actSignUp();
      break;
  }

  //activities.html 活動專區
  //----------------------------------------slider
  function actsBanner(){
    let bannerDivWidth = 100;
    let bannerLis = document.querySelectorAll('.pics li');
    let bannerCounts = document.querySelectorAll('.pics li').length;

    //ul的css寬度=100*banner個數+% 
    id('pics').style.width = `${bannerDivWidth * bannerCounts}%`;
    //li的css的寬度=100/banner個數+%
    for (var i = 0; i < bannerCounts; i++) {
      bannerLis[i].style.width = `${bannerDivWidth / bannerCounts}%`;
    }

    //增加.bannerSliderWrap
    $('#banner').find('ul#pics').wrapAll('<div class="bannerSliderWrap">');
    let bannerSliderWrap = $('#banner').find('.bannerSliderWrap');
    //clone第二個#pics--寬度=bannerSliderWrap/2 %
    $('#banner').find('ul#pics').css({ width: `${bannerDivWidth / 2}%` }).clone().appendTo('.bannerSliderWrap');
    //bannerSliderWrap寬度=100*banner個數*2 %
    bannerSliderWrap.css({ width: `${bannerDivWidth * bannerCounts * 2}%` });

    //----------------------------------------banner自動輪播
    let bannerSpeed = 3500;
    let bannerTimer;
    let sliderCounts;
    //增加Dots
    for (var i = 0; i < bannerCounts; i++) {
      $('.dotsWrap').append('<li></li>');
    }


    sliderCounts = 0;
    bannerTimer = setInterval(bannerAutoSlide, bannerSpeed);
    $(".activities-header .dotsWrap li:nth-child(1)").addClass('clickDot');

    function bannerAutoSlide() {
      //Dot換色
      $('.activities-header .dotsWrap li').removeClass('clickDot');
      $(".activities-header .dotsWrap li:eq(" + sliderCounts + ")").addClass('clickDot');
      //banner到第四張第一個dot會亮
      if (sliderCounts >= bannerCounts) {
        $(".activities-header .dotsWrap li:eq(0)").addClass('clickDot');
      }

      //當banner輪播數>banner張數，重新輪播
      if (sliderCounts > bannerCounts) {
        sliderCounts = 0;
        $('.bannerSliderWrap').css({ left: `${sliderCounts}%` });
      } else {
        $('.bannerSliderWrap').animate({
          left: `${(-sliderCounts) * 100}%`,
        }, 1000, 'linear');
      }
      
      console.log(`自動輪播sliderCounts: ${sliderCounts}`);
      sliderCounts++;
    };//banner自動輪播End

    //click dot
    $('.activities-header .dotsWrap li').click(function(){
      let dotIndex = $(this).index();
      sliderCounts = dotIndex;
      //重啟自動輪播
      clearInterval(bannerTimer);
      bannerTimer = setInterval(bannerAutoSlide, bannerSpeed);
      //點點樣式做變化
      $(this).addClass('clickDot');
      $('.activities-header .dotsWrap li').not(this).removeClass('clickDot');

      $('.bannerSliderWrap').animate({
        left: `${(-sliderCounts) * 100}%`,
      }, 1000, 'linear');
    });

  }//sliderEnd

  //------------------------------------------活動類別按鈕切換
  function changeActsSort(){
    let pageActsBtn = document.querySelectorAll('.acts-btns .btn');

    //切換大標文字
    for(var i=0; i<pageActsBtn.length; i++){
      pageActsBtn[i].addEventListener('click',function(e){
        //let btnTitle = document.querySelector(`${this.nodeName} p`).innerText;
        var btnTitle = e.target.innerText;
        //let btnTitle = document.querySelector(`${this.tagName} p`).innerText;
        //let btnTitle = document.querySelector(`${e.currentTarget.tagName} p`).innerText;
        //console.log(btnTitle);
        
        //清除其他按鈕顏色
        cleanBtnBgc();

        //btn換顏色
        e.currentTarget.style.backgroundColor = "#2e5c6d";

        //改大標文字
        id('acts-title').innerText = btnTitle;
      });
    }
    //清除其他按鈕顏色
    function cleanBtnBgc(){
      for (var i = 0; i < pageActsBtn.length; i++){
        pageActsBtn[i].style.backgroundColor = "#028090";
      }
    };
  }; //活動類別按鈕切換End
 
  //----------------------------------------腳步移動動畫
  function pawsMove() {
    var actionRange = id("acts-paws").offsetHeight;
    if(screen.width < 768){
      var scene = new ScrollMagic.Scene({
        triggerElement: '#paws-trigger',
        triggerHook: .3,
        duration: actionRange * .3,
        offset: actionRange * .2
      }).setTween(pawAnime).addTo(smController);
    } else if (screen.width < 1200) {
      var scene = new ScrollMagic.Scene({
        triggerElement: '#paws-trigger',
        triggerHook: .52,
        duration: actionRange * .32,
        offset: actionRange * .1
      }).setTween(pawAnime).addTo(smController);
    } else{
      var scene = new ScrollMagic.Scene({
        triggerElement: '#paws-trigger',
        triggerHook: .58,
        duration: actionRange * .6,
        offset: actionRange * .1
      }).setTween(pawAnime).addTo(smController);
    }
  } //腳步移動動畫End
  

  //activityContent.html 活動內頁
  //----------------------------------------腳步移動動畫
  function pawsMove2(){
    var actionRange = id("acts-paws2").offsetHeight;
    if (screen.width < 768) {
      var scene = new ScrollMagic.Scene({
        triggerElement: '#paws-trigger',
        triggerHook: .3,
        duration: actionRange * .4,
        offset: actionRange * .15
      }).setTween(pawAnime).addTo(smController);
    } else if (screen.width < 1025) {
      var scene = new ScrollMagic.Scene({
        triggerElement: '#paws-trigger',
        triggerHook: .45,
        duration: actionRange * .2,
        offset: actionRange * .12
      }).setTween(pawAnime).addTo(smController);
    } else if (screen.width < 1200) {
      var scene = new ScrollMagic.Scene({
        triggerElement: '#paws-trigger',
        triggerHook: .45,
        duration: actionRange * .35,
        offset: actionRange * .12
      }).setTween(pawAnime).addTo(smController);
    } else {
      var scene = new ScrollMagic.Scene({
        triggerElement: '#paws-trigger',
        triggerHook: .58,
        duration: actionRange * .6,
        offset: actionRange * .1
      }).setTween(pawAnime).addTo(smController);
    }
  }//腳步移動動畫結束

  //----------------------------------------活動報名
  function actSignUp(){
    var clickCounts = 0;
    id("actSignBtn").addEventListener('click',function(e){
      let actSignBtnText = e.target;
      console.log(actSignBtnText);

      let actSigntimer;
      

      //顯示報名成功
      id('actsSignSuccessLightBox').style.display = '';
      actSigntimer = setTimeout(closeSuccessBox, 2500);
      clickCounts++;
      //關掉lightBox
      function closeSuccessBox() {
        id('actsSignSuccessLightBox').style.display = 'none';
        id('actSignBtn').style.backgroundColor = '#d8d8d8';
        id('actSignBtn').style.cursor = 'default';
        id('thisActNowNum').style.display = 'none';
        actSignBtnText.innerText = '已報名';
        id('actSignBtn').disabled = true;
      };
    }); 
    
  } //活動報名End


};

window.addEventListener("load",init,false);