function init() {

    function products() {
        function showAllproduct(jsonStr) {
            var products = JSON.parse(jsonStr);
            //console.log(products);
            let allprodHTML = '';
            console.log(allprodHTML);
            let prodCardSection = document.querySelector('.col-lg-6');

            //產生商品卡片
            if () {

            };
        };
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            if (xhr.status == 200) {
                showAllproduct(xhr.responseText);
            } else {
                alert(xhr.status);
            }
        };

        xhr.open("get", "./php/product-showData.php", true);
        xhr.send(null);

    };
    products();
};
window.addEventListener("load", init, false);