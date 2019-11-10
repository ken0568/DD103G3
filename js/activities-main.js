function init() {
  function id(id) {
    return document.getElementById(id);
  }

  //-------腳步移動動畫
  let smController = new ScrollMagic.Controller();

  let pawAnime = TweenMax.staggerFromTo('.paw', .2, {
    opacity: 0,
  }, {
    opacity: 1,
  }, .5);

  var ScreenWidth = screen.width;

  //--------resize
  $(window).resize(function () {
    var actionRange = document.querySelectorAll('.activityContent-actInfo .right')[0].offsetHeight;
    var mapHeight = document.querySelectorAll('.activityContent-actInfo .map')[0].offsetHeight;
    var signBoxHeight = document.querySelectorAll('.activityContent-actInfo .signBox')[0].offsetHeight;
    var ScreenWidth = screen.width;
  });

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
      signBoxMove();
      showMap();
      breadCrumbs();
      break;
  }

  //========= activities.html 活動專區 ==========//
  //----------------------------------------slider
  function actsBanner() {
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
    $('.activities-header .dotsWrap li').click(function () {
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
  function changeActsSort() {
    let pageActsBtn = document.querySelectorAll('.acts-btns .btn');

    //切換大標文字
    for (var i = 0; i < pageActsBtn.length; i++) {
      pageActsBtn[i].addEventListener('click', function (e) {
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
    function cleanBtnBgc() {
      for (var i = 0; i < pageActsBtn.length; i++) {
        pageActsBtn[i].style.backgroundColor = "#028090";
      }
    };
  }; //活動類別按鈕切換End

  //----------------------------------------腳步移動動畫
  function pawsMove() {
    var actionRange = id("acts-paws").offsetHeight;
    if (ScreenWidth < 768) {
      var scene = new ScrollMagic.Scene({
        triggerElement: '#paws-trigger',
        triggerHook: .3,
        duration: actionRange * .3,
        offset: actionRange * .2
      }).setTween(pawAnime).addTo(smController);
    } else if (ScreenWidth < 1200) {
      var scene = new ScrollMagic.Scene({
        triggerElement: '#paws-trigger',
        triggerHook: .52,
        duration: actionRange * .32,
        offset: actionRange * .1
      }).setTween(pawAnime).addTo(smController);
    } else {
      var scene = new ScrollMagic.Scene({
        triggerElement: '#paws-trigger',
        triggerHook: .58,
        duration: actionRange * .6,
        offset: actionRange * .1
      }).setTween(pawAnime).addTo(smController);
    }
  }; //腳步移動動畫End


  //========= activityContent.html 活動內頁 =========//
  //----------------------------------------腳步移動動畫
  function pawsMove2() {
    var actionRange = id("acts-paws2").offsetHeight;
    if (ScreenWidth < 768) {
      var scene = new ScrollMagic.Scene({
        triggerElement: '#paws-trigger',
        triggerHook: .3,
        duration: actionRange * .4,
        offset: actionRange * .15
      }).setTween(pawAnime).addTo(smController);
    } else if (ScreenWidth < 1025) {
      var scene = new ScrollMagic.Scene({
        triggerElement: '#paws-trigger',
        triggerHook: .45,
        duration: actionRange * .2,
        offset: actionRange * .12
      }).setTween(pawAnime).addTo(smController);
    } else if (ScreenWidth < 1200) {
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
  };//腳步移動動畫結束

  //----------------------------------------右側signBox移動
  function signBoxMove() {
    var actionRange = document.querySelectorAll('.activityContent-actInfo .right')[0].offsetHeight;
    var mapHeight = document.querySelectorAll('.activityContent-actInfo .map')[0].offsetHeight;
    var signBoxHeight = document.querySelectorAll('.activityContent-actInfo .signBox')[0].offsetHeight;
    //console.log(actionRange);

    if (ScreenWidth > 767) {
      let scollDownAnime = TweenMax.staggerFromTo('.signBox', 2, {
        y: 0
      }, {
        y: actionRange - mapHeight + signBoxHeight,
      }, 0.5);

      var scene = new ScrollMagic.Scene({
        triggerElement: '#signBox-trigger',
        triggerHook: .3,
        duration: actionRange,
        offset: actionRange * .05
      }).setTween(scollDownAnime).addTo(smController);
    }
  }; //右側signBox移動End

  //----------------------------------------活動報名
  function actSignUp() {
    var clickCounts = 0;
    id("actSignBtn").addEventListener('click', function (e) {
      let actSignBtnText = e.target;
      id('actSignBtn').disabled = true;
      let actSigntimer;

      //顯示報名成功
      id('actsSignSuccessLightBox').style.display = '';
      actSigntimer = setTimeout(closeSuccessBox, 2000);
      clickCounts++;
      //關掉lightBox，click顯示成功lightBOX外面or自動消失
      id('actsSignSuccessLightBox').addEventListener('click', function () {
        id('actsSignSuccessLightBox').style.display = 'none';
        id('actSignBtn').style.backgroundColor = '#d8d8d8';
        id('actSignBtn').style.cursor = 'default';
        id('thisActNowNum').style.display = 'none';
        actSignBtnText.innerText = '已報名';
      });
      function closeSuccessBox() {
        id('actsSignSuccessLightBox').style.display = 'none';
        id('actSignBtn').style.backgroundColor = '#d8d8d8';
        id('actSignBtn').style.cursor = 'default';
        id('thisActNowNum').style.display = 'none';
        actSignBtnText.innerText = '已報名';
      };
    });

  }; //活動報名End

  //----------------------------------------活動地圖
  function showMap() {
    let area = id('actMap');
    let actLatLng = new google.maps.LatLng(25.000618, 121.463370);
    let options = {
      zoom: 14,
      center: actLatLng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    let actMap = new google.maps.Map(area, options);
    let marker = new google.maps.Marker({
      position: actLatLng,
      map: actMap,
      icon: '../img/activities_mapLocation.png',
    });
  } //活動地圖End

  //----------------------------------------麵包屑
  function breadCrumbs() {
    let breadCrumbsLast = document.querySelectorAll('.breadCrumbs li:last-child')[0];
    let actBigTitle = document.querySelectorAll('.actBigName')[0];
    $('.breadCrumbs').append('<li><a href="activities.html">活動專區</a></li>');
    //第二個需要判斷在前一頁是否有click頁籤
    $('.breadCrumbs').append('<li><a href="activities.html">分享講座</a></li>');
    //麵包屑最後一項跟活動標題一樣
    $('.breadCrumbs').append(`<li>${actBigTitle.innerText}</li>`);
  } //麵包屑End

};

window.addEventListener("load", init, false);