var per = 0;

var timer = setInterval(function(){
    $('.bar').css('width',per + "%");
    per += 1;
    if(per>100){
        $('.pageLoading').addClass('complete');
        setTimeout(function(){
            $('.mosterText').html("<h2>\
            We are\
            <br>\
            SQUARE\
            <br>\
            MONSTER!\
        </h2>\
        <h3>Ahhhh We'll eat you.</h3>");
        },3000);
        clearInterval(timer);
    }
},30)
