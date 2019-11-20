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
            <div id="myModal3" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <h4>購入失敗!</h4>
                <p> 愛心幣不足!</p>
            </div>
            </div>
            `;
                };
                prodCardSection.innerHTML = allprodHTML;
            };
            //產生商品卡片End



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
            //$(document).ready(function () {

            //});




        }
        //燈箱結束



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


    function showMembers() {
        function showMem(jsonStr) {
            var members = JSON.parse(jsonStr);
            let memberHTML = "";
            let memMiddleSection = document.querySelector('.ph-mem-box');
            //產生卡片

            memberHTML += `
            <div class="ph-mem-text">
            <p id="">${members[0].memName}</p>
            <p>寵物:<span id="">${members[0].petName}</span></p>
            <img src="img/ph-coin.png" alt="coin">
            <div class="coin">
                <p>${members[0].coin}</p>
                <input type='text' hidden value='' name='henry' id='henry'>
            </div>
            </div>
                  `;

            memMiddleSection.innerHTML = memberHTML;



            //愛心幣 開始
            $('.button').click(function () {
                //check money is ok?
                var money = parseInt($('.coin').find('p').text());
                var price = parseInt($(this).find('label').text());
                var total = money - price;
                if (money >= price) {
                    console.log(total);
                    $('#henry').val(total);
                    $('.coin').find('p').text(total);
                    $('#myModal').css('display', 'block');
                } else {
                    $('#myModal3').css('display', 'block');
                };

            });

            $('.getPrice').click(function () {
                var money = parseInt($('.coin').find('p').text());
                var price = parseInt($(this).find('label').text());
                var total = money - price;

                if (money >= price) {
                    $('#henry').val(total);
                    $('.coin').find('p').text(total);
                    var btn = $(this).find('label').text();
                    $('.modal-content label').text(btn);
                    $('#myModal2').css('display', 'block');
                } else {
                    $('#myModal3').css('display', 'block');
                };

            });
            $('.close').click(function () {
                $('#myModal2').css('display', 'none');
                $('#myModal3').css('display', 'none');
            });


            $('.close').click(function () {
                $('#myModal').css('display', 'none');
                $('#myModa3').css('display', 'none');
            });
            //愛心幣結束    
        }

        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            if (xhr.status == 200) {
                showMem(xhr.responseText);
            } else {
                alert(xhr.status);
            }
        }


        xhr.open("get", "./php/product-member.php", true);
        xhr.send(null);

    };
    showMembers();

};

window.addEventListener("load", init, false);