function init() {
    /*** 接資料 ***/

    function showAllproduct(jsonStr) {
        var products = JSON.parse(jsonStr);

        let allprodHTML = "";
        let prodCardSection = document.querySelector('.shop-cards');
        console.log(prodCardSection);

        //產生卡片
        for (var i = 0; i < products.length; i++) {
            allprodHTML += `
                <div class="shop-card">
                <img src="./backStage/images/${products[i].prodPic}">
                <div class="shop-text">
                  <h4>${products[i].prodName}</h4>
                  <p>功能｜${products[i].prodText}</p>
                  <a href="#" class="btn">
                    <p class="btnFz">${products[i].price}</p>
                    <img src="img/coin.png" alt="" />
                  </a>
                </div>
              </div>
            `;
        };
        prodCardSection.innerHTML = allprodHTML;
    } //產生卡片End

    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status == 200) {
            showAllproduct(xhr.responseText);
            console.log(xhr.responseText);
        } else {
            alert(xhr.status);
        }
    }

    xhr.open("get", "./php/showinfo.php", true);
    xhr.send(null);

}
window.addEventListener("load", init, false);