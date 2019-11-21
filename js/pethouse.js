$(document).ready(function () {
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
    });
    $(".ph-sd-oh").click(function () {
        $(".ph-fd-sw").css("display", "none");
        $(".ph-hs-sw").css("display", "none");
        $(".ph-pu-sw").css("display", "none");
        $(".ph-oh-sw").css("display", "block");
    });
    $(".ph-oh-safe").click(function () {
        $(".ph-qa-box").css("display", "block");
        $(".ph-qa-bgc").css("display", "block");
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
    });
    $(".qa-wrong").click(function () {
        $(".ph-qa-wrong").css("display", "flex");
        $(".ph-qa-right").css("display", "none");
        $(".ph-qa-topic").css("display", "none");
    });
    $(".ph-fd-before").click(function () {
        $(".ph-fd-before").css("display", "none");
        $(".ph-fd-full").css("display", "block");
    });
    $(".ph-fd-full").click(function () {
        $(".ph-fd").addClass("ph-fd-ani");
        $(".ph-coin-plus").addClass("coin-ani");
        $(".ph-fd-full").css("display", "none");
        $(".ph-fd-after").css("display", "block");
    });
    $(".ph-st-before").click(function () {
        $(".ph-st").addClass("ph-fd-ani");
        $(".ph-coin-plus").addClass("coin-ani");
        $(".ph-st-before").css("display", "none");
        $(".ph-st-after").css("display", "block");
    });
    $("#pet-click").click(function () {        
        $("#pet-click").addClass("ph-click-run");
        setTimeout(function(){ 
            $('#pet-click').removeClass('ph-click-run'); },5000); 
        
    });
    
});