/**
 * Created by silence on 2017/3/27.
 */
$(function(){
    var oheight = $(document).height();
    $(".bg_a").css('height',oheight);
    try {
//            var text = "";
        window.addEventListener("deviceorientation", orientationHandler, false);
        function orientationHandler(event) {
//                text = ""
//                var arrow = document.getElementById("arrow");
//                text += "������ת��rotate alpha{" + Math.round(event.alpha) + "deg)<p>";
//                text += "ǰ����ת��rotate beta{" + Math.round(event.beta) + "deg)<p>";
//                text += "Ťת�豸��rotate gamma{" + Math.round(event.gamma) + "deg)<p>";
//                arrow.innerHTML = text;
            $(".bg_a").css('left',(Math.round(event.gamma))/100+'rem');
            $(".bg_a").css('top',(Math.round(event.beta))/100+'rem');
        }
    }
    catch (e) {
    }
//秒表效果
//  短

    //setInterval(function(){
    //    var short = $(".six .shortNum span").html();
    //    //var short = short*1;
    //    var numshort=parseFloat(short);
    //    numshort+=0.1;
    //    console.log(short);
    //    $(".six .shortNum span").html(numshort);
    //    if(numshort==16.5){
    //        clearInterval();
    //    }
    //},100)








});