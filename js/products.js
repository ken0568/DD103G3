//燈箱結束
function init() {
    //產生商品卡片 start
    function product() {
        function showAllproduct(jsonStr) {
            var products = JSON.parse(jsonStr);
            let allprodHTML = "";
            let prodCardSection = document.querySelector('.product-cards');

            //產生商品卡片
            for (var i = 0; i < products.length; i++) {
                food = products[i].prodType;
                if (food == 1) {
                    allprodHTML += `
            <div class="product-card">
                    <div class="product-img">
                        <img src="./backStage/images/${products[i].prodPic}" alt="">
                    </div>
                    <div class="product-text">
                        <h3>${products[i].prodName}</h3>
                        <p>功能 | ${products[i].prodText}</p>
                        <table id="tab">
                            <tr>
                                <td>
                                    <span class="price">${products[i].price}</span>
                                    <div class="plus-minus"><input class="min" name="" type="button" value="-" />
                                        <input class="text_box" name="" type="text" value="1" />
                                        <input class="add" name="" type="button" value="+" /></div>

                                </td>
                            </tr>
                        </table>
                        <a class="button">
                            <label>${products[i].price}</label>
                            <img src="img/shop-dollars.png" alt=" myBtn">
                        </a>
                    </div>
                    </div>
                    <div id="myModal" class="modal">

            <div class="modal-content">
                <span class="close">&times;</span>
                <h4>成功購入!</h4>
                <p> 已扣除<label id="total"></label>愛心幣，現在就到背包看看吧！</p>
            </div>

        </div>
        `;
                } else {
                    allprodHTML += `
        <div class="product-card">
        <div class="product-img">
            <img src="./backStage/images/${products[i].prodPic}" alt="">
        </div>
        <div class="product-text">
            <h3>${products[i].prodName}</h3>
            <p>功能 | ${products[i].prodText}</p>
            <a class="getPrice">
                <label class="prodPrice">${products[i].price}</label>
                <img src=" img/shop-dollars.png" alt=" myBtn">
            </a>
        </div>
    </div>
    <div id="myModal2" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <h4>成功購入!</h4>
                <p> 已扣除<label >${products[i].price}</label>愛心幣，現在就到背包看看吧！</p>
            </div>

        </div>
            `;
                };
                prodCardSection.innerHTML = allprodHTML;
            };
            //數量加減與總和 開始
            $(function () {
                $(".add").click(function () {
                    var t = $(this).parent().find('input[class*=text_box]');
                    t.val(parseInt(t.val()) + 1)
                    setTotal();
                })
                $(".min").click(function () {
                    var t = $(this).parent().find('input[class*=text_box]');
                    t.val(parseInt(t.val()) - 1)
                    if (parseInt(t.val()) < 1) {
                        t.val(1);
                    }
                    setTotal();
                })

                function setTotal() {
                    var s = 0;
                    $("#tab td").each(function () {
                        s += parseInt($(this).find('input[class*=text_box]').val()) * parseInt($(this)
                            .find('span[class*=price]').text());
                    });
                    $(".button label").text(s.toFixed());
                    $(".modal-content label").text(s.toFixed());
                }
                setTotal();

            });
            //數量加減與總和 結束

            //燈箱開始
            $(document).ready(function () {
                $('.button').click(function () {
                    $('#myModal').css('display', 'block');
                });
                $('.close').click(function () {
                    $('#myModal').css('display', 'none');
                });
            });
            $(document).ready(function () {
                $('.getPrice').click(function () {
                    var btn = $(this).find('label').text();
                    $('.modal-content label').text(btn);
                    console.log(btn);
                    $('#myModal2').css('display', 'block');
                });
                $('.close').click(function () {
                    $('#myModal2').css('display', 'none');
                });
            });
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

        xhr.open("get", "./php/product-showdata.php", true);
        xhr.send(null);
    }
    product();

};

window.addEventListener("load", init, false);