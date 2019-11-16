$(function () {
    $(".add").click(function () {
        var t = $(this).parent().find('input[class*=text_box]');
        t.val(parseInt(t.val()) + 1)
        setTotal();
    })
    $(".min").click(function () {
        var t = $(this).parent().find('input[class*=text_box]');
        t.val(parseInt(t.val()) - 1)
        if (parseInt(t.val()) < 0) {
            t.val(0);
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

//燈箱
$(document).ready(function () {
    $('.button').click(function () {
        $('#myModal').css('display', 'block');
    });
    $('.close').click(function () {
        $('#myModal').css('display', 'none');
    });
});