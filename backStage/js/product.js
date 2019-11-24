$('#insert').click(function () {
    var prodType = $('.equipClass').val();
    var prodName = $('#pName').val();
    var img = document.getElementById('pImg').files[0];
    var prodImg = img.name;
    var prodPrice = parseInt($('#pPrice').val());
    var prodInfo = $('#pInfo').val();
    var prodStatus = parseInt($('#pStatus').val());
    console.log(prodType, prodName, prodImg, prodPrice, prodInfo, prodStatus);
    $.ajax({
        type: 'POST',
        url: './php/product.php',
        data: {
            type: prodType,
            name: prodName,
            img: prodImg,
            price: prodPrice,
            info: prodInfo
        },
        success: function (msg) {
            console.log(msg);
        },
    })
});