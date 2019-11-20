function init() {
  /*** 接資料 ***/

  //商品
  function product() {
    function showAllproduct(jsonStr) {
      var products = JSON.parse(jsonStr);
      let allprodHTML = "";
      let prodCardSection = document.querySelector('.shop-cards');

      //產生商品卡片
      for (var i = 0; i < products.length; i++) {
        allprodHTML += `
                <div class="shop-card">
                <img src="./backStage/images/${products[i].prodPic}">
                <div class="shop-text">
                  <h4>${products[i].prodName}</h4>
                  <p>功能｜${products[i].prodText}</p>
                  <a href="products.html" class="btn">
                    <p class="btnFz">${products[i].price}</p>
                    <img src="img/coin.png" alt="" />
                  </a>
                </div>
              </div>
            `;
      };
      prodCardSection.innerHTML = allprodHTML;
    }
    //產生商品卡片End
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      if (xhr.status == 200) {
        showAllproduct(xhr.responseText);
      } else {
        alert(xhr.status);
      }
    }

    xhr.open("get", "./php/home-products.php", true);
    xhr.send(null);
  }
  product();

  //活動
  function showActivity() {
    function showAllActivity(jsonStr) {
      var activity = JSON.parse(jsonStr);
      let allActHTML = "";
      let actMiddleSection = document.querySelector('.activity-cards');


      //產生卡片
      for (var i = 0; i < 3; i++) {
        allActHTML += `
                <div class="activity-card">
                <a href="activityContent.html">
                  <img src="./backStage/images/${activity[i].actPic}">
                  <div class="activity-text clearfix">
                    <p>${activity[i].actDate}</p>
                    <h4>${activity[i].actName}</h4>
                    <div class="signup">
                      <p>#${activity[i].actType}</p>
                      <p>${activity[i].parNum}人已報名</p>
                    </div>
                  </div>
                </a>
              </div>
              `;
      };

      actMiddleSection.innerHTML = allActHTML;
    } //產生卡片End

    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
      if (xhr.status == 200) {
        showAllActivity(xhr.responseText);
      } else {
        alert(xhr.status);
      }
    }


    xhr.open("get", "./php/home-activity.php", true);
    xhr.send(null);

  };
  showActivity();



}
window.addEventListener("load", init, false);