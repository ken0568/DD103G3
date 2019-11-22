$(document).ready(function () {
    
    $.ajax({
        url: "./php/pethouse-member.php",

        datType: "json",

        type: "GET",

        success: function (data) {
            console.log(data);


            let result = JSON.parse(data);
            $("#ph-coin-1").text(result[0].coin);
            $("#ph-coin-2").text(result[0].coin);
            $("#ph-coin-3").text(result[0].coin);

            $("#ph-memId-1").text(result[0].memNick);
            $("#ph-memId-2").text(result[0].memNick);
            $("#ph-memId-3").text(result[0].memNick);

            $("#ph-memName-1").text(result[0].petName);
            $("#ph-memName-2").text(result[0].petName);
            $("#ph-memName-3").text(result[0].petName);
        }
    });
    $.ajax({
        url: "./php/pethouse-activity.php",

        datType: "json",

        type: "GET",

        success: function (data) {
            console.log(data);


            let result = JSON.parse(data);
            $("#ph-act-date-1").text(result[0].actDate);
            $("#ph-act-date-2").text(result[1].actDate);
            $("#ph-act-date-3").text(result[2].actDate);
            $("#ph-act-date-4").text(result[0].actDate);
            $("#ph-act-date-5").text(result[1].actDate);
            $("#ph-act-date-6").text(result[2].actDate);
            $("#ph-act-date-7").text(result[0].actDate);
            $("#ph-act-date-8").text(result[1].actDate);
            $("#ph-act-date-9").text(result[2].actDate);
            $("#ph-act-date-10").text(result[0].actDate);
            $("#ph-act-date-11").text(result[1].actDate);
            $("#ph-act-date-12").text(result[2].actDate);
            
            $("#ph-act-text-1").text(result[0].actName);
            $("#ph-act-text-2").text(result[1].actName);
            $("#ph-act-text-3").text(result[2].actName);
            $("#ph-act-text-4").text(result[0].actName);
            $("#ph-act-text-5").text(result[1].actName);
            $("#ph-act-text-6").text(result[2].actName);
            $("#ph-act-text-7").text(result[0].actName);
            $("#ph-act-text-8").text(result[1].actName);
            $("#ph-act-text-9").text(result[2].actName);
            $("#ph-act-text-10").text(result[0].actName);
            $("#ph-act-text-11").text(result[1].actName);
            $("#ph-act-text-12").text(result[2].actName);
        }
    });

    $(".ph-hs-btn").click(function () {
        $(".ph-fd-sw").css("display", "none");
        $(".ph-hs-sw").css("display", "block");
        $(".ph-pu-sw").css("display", "none");
        $(".ph-oh-sw").css("display", "none");
    });
    $(".ph-fe-btn").click(function () {
        $(".ph-fd-sw").css("display", "block");
        $(".ph-hs-sw").css("display", "none");
        $(".ph-pu-sw").css("display", "none");
        $(".ph-oh-sw").css("display", "none");
        $(".ph-fd").removeClass("ph-fd-ani");
        $(".ph-coin-plus").removeClass("coin-ani");
        $(".ph-fd-after").css("display", "none");
        $(".ph-fd-before").css("display", "block");
        $(".ph-fd-full").css("display", "none");
    });
    $(".ph-sv-btn").click(function () {
        $(".ph-fd-sw").css("display", "none");
        $(".ph-hs-sw").css("display", "none");
        $(".ph-pu-sw").css("display", "block");
        $(".ph-oh-sw").css("display", "none");
        $(".ph-st-before").css("display", "block");
        $(".ph-st-after").css("display", "none");
        $(".ph-coin-plus").removeClass("coin-ani");
        $(".ph-st").removeClass("ph-fd-ani");
    });
    $(".ph-fd-no").click(function () {
        $(".ph-fd-sw").css("display", "block");
        $(".ph-hs-sw").css("display", "none");
        $(".ph-pu-sw").css("display", "none");
        $(".ph-oh-sw").css("display", "none");
        $(".ph-fd").removeClass("ph-fd-ani");
        $(".ph-coin-plus").removeClass("coin-ani");
        $(".ph-fd-after").css("display", "none");
        $(".ph-fd-before").css("display", "block");
        $(".ph-fd-full").css("display", "none");
    });
    $(".ph-fd").click(function () {
        $(".ph-fd-sw").css("display", "block");
        $(".ph-hs-sw").css("display", "none");
        $(".ph-pu-sw").css("display", "none");
        $(".ph-oh-sw").css("display", "none");
    });
    $(".ph-st-full").click(function () {
        $(".ph-fd-sw").css("display", "none");
        $(".ph-hs-sw").css("display", "none");
        $(".ph-pu-sw").css("display", "block");
        $(".ph-oh-sw").css("display", "none");
        $(".ph-st-before").css("display", "block");
        $(".ph-st-after").css("display", "none");
        $(".ph-coin-plus").removeClass("coin-ani");
        $(".ph-st").removeClass("ph-fd-ani");
    });
    $(".ph-st").click(function () {
        $(".ph-fd-sw").css("display", "none");
        $(".ph-hs-sw").css("display", "none");
        $(".ph-pu-sw").css("display", "block");
        $(".ph-oh-sw").css("display", "none");
    });
    $(".ph-dr").click(function () {
        $(".ph-fd-sw").css("display", "none");
        $(".ph-hs-sw").css("display", "none");
        $(".ph-pu-sw").css("display", "none");
        $(".ph-oh-sw").css("display", "block");
        $.ajax({
            url: "./php/pethouse-other-mem.php",

            datType: "json",

            type: "GET",

            success: function (data) {
                console.log(data);

                
                let result = JSON.parse(data);
                $("#ph-other-coin").text(result[0].coin);
                $("#ph-other-memId").text(result[0].memNick);
                $("#ph-other-memName").text(result[0].petName);
            }
        });
    });
    $(".ph-sd-oh").click(function () {
        $(".ph-fd-sw").css("display", "none");
        $(".ph-hs-sw").css("display", "none");
        $(".ph-pu-sw").css("display", "none");
        $(".ph-oh-sw").css("display", "block");
        $.ajax({
            url: "./php/pethouse-other-mem.php",

            datType: "json",

            type: "GET",

            success: function (data) {
                console.log(data);


                let result = JSON.parse(data);
                $("#ph-other-coin").text(result[0].coin);
                $("#ph-other-memId").text(result[0].memNick);
                $("#ph-other-memName").text(result[0].petName);
            }
        });
    });
    $(".ph-oh-safe").click(function () {
        $(".ph-qa-box").css("display", "block");
        $(".ph-qa-bgc").css("display", "block");
        $.ajax({
            url: "./php/pethouse-other-QA.php",

            datType: "json",

            type: "GET",

            success: function (data) {
                console.log(data);


                let result = JSON.parse(data);
                $("#ph-qa-text-1").text(result[0].quesText);
                $("#ph-qa-text-2").text(result[0].quesText);
                $("#ph-qa-text-3").text(result[0].quesText);

                $("#ph-qa-texta-1").text(result[0].ansAText);
                $("#ph-qa-texta-2").text(result[0].ansAText);
                $("#ph-qa-texta-3").text(result[0].ansAText);

                $("#ph-qa-textb-1").text(result[0].ansBText);

                $("#ph-qa-ans-1").text(result[0].rightAns);
                $("#ph-qa-ans-2").text(result[0].rightAns);

            }
        });
    });
    $(".qa-exit").click(function () {
        $(".ph-qa-box").css("display", "none");
        $(".ph-qa-bgc").css("display", "none");
        $(".ph-qa-topic").css("display", "block");
        $(".ph-qa-wrong").css("display", "none");
        $(".ph-qa-right").css("display", "none");
    });
    $(".qa-right").click(function () {
        $(".ph-qa-right").css("display", "flex");
        $(".ph-qa-wrong").css("display", "none");
        $(".ph-qa-topic").css("display", "none");
        var money1 = parseInt($('#ph-coin-1').text());
        var money2 = parseInt($('#ph-coin-2').text());
        var money3 = parseInt($('#ph-coin-3').text());
        var money4 = parseInt($('#ph-other-coin').text());
        var price = parseInt("300");
        var total1 = money1 + price;
        var total2 = money2 + price;
        var total3 = money3 + price;
        var total4 = money4 - price;
            $('#ph-coin-1').text(total1);
            $('#ph-coin-2').text(total2);
            $('#ph-coin-3').text(total3);
            $('#ph-other-coin').text(total4);
    });
    $(".qa-wrong").click(function () {
        $(".ph-qa-wrong").css("display", "flex");
        $(".ph-qa-right").css("display", "none");
        $(".ph-qa-topic").css("display", "none");
    });
    $(".ph-fd-before").click(function () {
        $(".ph-fd-before").css("display", "none");
        $(".ph-fd").addClass("ph-fd-ani");
        $(".ph-coin-plus").addClass("coin-ani");
        $(".ph-fd-after").css("display", "block");
        $(".ph-fd-no").css("display", "none")
        $(".ph-hg").css("display", "none");
        
        var money1 = parseInt($('#ph-coin-1').text());
        var money2 = parseInt($('#ph-coin-2').text());
        var money3 = parseInt($('#ph-coin-3').text());
        var price = parseInt("500");
        var total1 = money1 + price;
        var total2 = money2 + price;
        var total3 = money3 + price;
            $('#ph-coin-1').text(total1);
            $('#ph-coin-2').text(total2);
            $('#ph-coin-3').text(total3);

        setTimeout(function () {
            $(".ph-fd").removeClass("ph-fd-ani");
            $(".ph-coin-plus").removeClass("coin-ani");
            $(".ph-fd-after").css("display", "none");
            $(".ph-fd-before").css("display", "block");
            $(".ph-fd-no").css("display", "block");
            $(".ph-hg").css("display", "block");
        }, 6000);
    });
    $(".ph-st-before").click(function () {
        $(".ph-st").addClass("ph-fd-ani");
        $(".ph-coin-plus").addClass("coin-ani");
        $(".ph-st-before").css("display", "none");
        $(".ph-st-after").css("display", "block");
        $(".ph-st-full").css("display", "none");
        $(".ph-st-no").css("display", "block");
        
        var money1 = parseInt($('#ph-coin-1').text());
        var money2 = parseInt($('#ph-coin-2').text());
        var money3 = parseInt($('#ph-coin-3').text());
        var price = parseInt("150");
        var total1 = money1 + price;
        var total2 = money2 + price;
        var total3 = money3 + price;
        $('#ph-coin-1').text(total1);
        $('#ph-coin-2').text(total2);
        $('#ph-coin-3').text(total3);

        setTimeout(function(){ 
            $(".ph-st").removeClass("ph-fd-ani");
            $(".ph-coin-plus").removeClass("coin-ani");
            $(".ph-st-before").css("display", "block");
            $(".ph-st-after").css("display", "none"); 
            $(".ph-st-full").css("display", "block");
            $(".ph-st-no").css("display", "none");
        },6000); 
    });
    setTimeout(function () {
        $("#pet-click").click(function () {        
        $("#pet-click").addClass("ph-click-run");
        $(".ph-hg").css("display", "none");
            setTimeout(function(){ 
                $('#pet-click').removeClass('ph-click-run');
                $(".ph-hg").css("display", "block");
            }, 5000);
        });
    }, 10000);
    $(".bg-exit").click(function () {
        $(".bg-all-lightbox").css("display", "none");
        $(".bg-eve-on").addClass("display-n");
        $(".bg-eve-off").addClass("display-n");
        $(".bg-foodBox-on").addClass("display-n");
        $(".bg-foodBox-off").addClass("display-n");
        $(".bg-shitBox-on").addClass("display-n");
        $(".bg-shitBox-off").addClass("display-n");
        $(".bg-shitBu-on").addClass("display-n");
        $(".bg-shitBu-off").addClass("display-n");
    });

    $(".bg-li-eve").click(function () {
        $(".bg-all-lightbox").css("display", "block");
        $(".bg-eve-on").removeClass("display-n");
        $(".bg-eve-off").removeClass("display-n");
        $(".bg-foodBox-on").addClass("display-n");
        $(".bg-foodBox-off").addClass("display-n");
        $(".bg-shitBox-on").addClass("display-n");
        $(".bg-shitBox-off").addClass("display-n");
        $(".bg-shitBu-on").addClass("display-n");
        $(".bg-shitBu-off").addClass("display-n"); 

        $(".bg-eve-off").click(function () {
            $(".ph-clothes").css("display", "none");
            $(".bg-all-lightbox").css("display", "none");
            $('.bg-li-eve').removeClass('bg-used');
        });

        $(".bg-eve-on").click(function () {
            $(".ph-clothes").css("display", "block");
            $(".bg-all-lightbox").css("display", "none");
            $('.bg-li-eve').addClass('bg-used');
        });
    });   

    $(".bg-li-foodBox").click(function () {
        $(".bg-all-lightbox").css("display", "block");
        $(".bg-eve-on").addClass("display-n");
        $(".bg-eve-off").addClass("display-n");
        $(".bg-foodBox-on").removeClass("display-n");
        $(".bg-foodBox-off").removeClass("display-n");
        $(".bg-shitBox-on").addClass("display-n");
        $(".bg-shitBox-off").addClass("display-n");
        $(".bg-shitBu-on").addClass("display-n");
        $(".bg-shitBu-off").addClass("display-n");
         

        $(".bg-foodBox-off").click(function () {
            $(".ph-fd-no").attr("src","img/foodbox.png");
            $(".ph-fd-before").attr("src","img/foodbox.png");
            $(".ph-fd-after").attr("src","img/foodbox-full.png");
            $(".bg-all-lightbox").css("display", "none");
            $('.bg-li-foodBox').removeClass('bg-used'); 
        });

        $(".bg-foodBox-on").click(function () {
            $(".ph-fd-no").attr("src","img/shop-foodBowl.png");
            $(".ph-fd-before").attr("src","img/shop-foodBowl.png");
            $(".ph-fd-after").attr("src","img/ph-fdbox-1.png");
            $(".bg-all-lightbox").css("display", "none");
            $('.bg-li-foodBox').addClass('bg-used');
        });
    });

    $(".bg-li-shitBox").click(function () {
        $(".bg-all-lightbox").css("display", "block");
        $(".bg-eve-on").addClass("display-n");
        $(".bg-eve-off").addClass("display-n");
        $(".bg-foodBox-on").addClass("display-n");
        $(".bg-foodBox-off").addClass("display-n");
        $(".bg-shitBox-on").removeClass("display-n");
        $(".bg-shitBox-off").removeClass("display-n");
        $(".bg-shitBu-on").addClass("display-n");
        $(".bg-shitBu-off").addClass("display-n");

        $(".bg-shitBox-off").click(function () {
            $(".ph-st-full").attr("src","img/shitbox-full.png");
            $(".ph-st-before").attr("src","img/shitbox-full.png");
            $(".ph-st-after").attr("src","img/shitbox.png");
            $(".ph-st-no").attr("src","img/shitbox.png");
            $(".bg-all-lightbox").css("display", "none");
            $('.bg-li-shitBox').removeClass('bg-used'); 
        });

        $(".bg-shitBox-on").click(function () {
            $(".ph-st-full").attr("src","img/shitBox-h-full.png");
            $(".ph-st-before").attr("src","img/shitBox-h-full.png");
            $(".ph-st-after").attr("src","img/shop-catLitter.png");
            $(".ph-st-no").attr("src","img/shop-catLitter.png");
            $(".bg-all-lightbox").css("display", "none");
            $('.bg-li-shitBox').addClass('bg-used');
        });
    });
    $(".bg-li-shitBu").click(function () {
        $(".bg-all-lightbox").css("display", "block");
        $(".bg-eve-on").addClass("display-n");
        $(".bg-eve-off").addClass("display-n");
        $(".bg-foodBox-on").addClass("display-n");
        $(".bg-foodBox-off").addClass("display-n");
        $(".bg-shitBox-on").addClass("display-n");
        $(".bg-shitBox-off").addClass("display-n");
        $(".bg-shitBu-on").removeClass("display-n");
        $(".bg-shitBu-off").removeClass("display-n"); 

        $(".bg-shitBu-off").click(function () {
            $(".ph-st-full").attr("src","img/ph-shitBu-full.png");
            $(".ph-st-before").attr("src","img/ph-shitBu-full.png");
            $(".ph-st-after").attr("src","img/ph-shitBu.png");
            $(".ph-st-no").attr("src","img/ph-shitBu.png");
            $(".bg-all-lightbox").css("display", "none");
            $('.bg-li-shitBu').removeClass('bg-used'); 
        });

        $(".bg-shitBu-on").click(function () {
            $(".ph-st-full").attr("src","img/ph-shitBu-h.png");
            $(".ph-st-before").attr("src","img/ph-shitBu-h.png");
            $(".ph-st-after").attr("src","img/ph-diaper-1.png");
            $(".ph-st-no").attr("src","img/ph-diaper-1.png");
            $(".bg-all-lightbox").css("display", "none");
            $('.bg-li-shitBu').addClass('bg-used');
        });
    });
    
});