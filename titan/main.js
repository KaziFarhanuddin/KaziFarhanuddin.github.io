// Main

    // For nav bar  
    $(document).ready(function () {
        $('.sidenav').sidenav();
    });

    // For Popup    
    $(document).ready(function () {
        $('.modal').modal();
    });

    // For Parallax
    $(document).ready(function () { 
        $('.parallax').parallax();
    });

// For Filter
    $(document).ready(function(){
        $("#filter-btn").click(function(){  
            $("#filter-div").animate({
                height: 'toggle',
            }, "slow");
        });
    });

// Product-detail
    let img = document.getElementById('main-img');
    var imgs = document.querySelectorAll('.images')
    function changeImg(src) {
        img.src=src
    }
    for(i=0; i<imgs.length; i++) {
        let v = imgs[i].src;
        imgs[i].addEventListener("click", function(){changeImg(v)}, false);
    }
    function decrease_product(opt) {
        if (opt!=undefined){
            var s = 'no_of_'+opt;
            let no_of = document.getElementById(s.toString())
            if (Number(no_of.value) > 1){
                no_of.value = Number(no_of.value)-1        
            }
        }
        else{
            let no_of = document.getElementById('no_of')
            if (Number(no_of.value) > 1){
                no_of.value = Number(no_of.value)-1
            }
        }
    }
    function increase_product(opt) {
        if (opt!=undefined){
            var s = 'no_of_'+opt;
            let no_of = document.getElementById(s)
            no_of.value = Number(no_of.value)+1
        }
        else{
            let no_of = document.getElementById('no_of')
            no_of.value = Number(no_of.value) + 1        
        }
    }
    // For tabs
    $(document).ready(function(){
    $('.tabs').tabs();
    });

// Add to Favouret
document.getElementById('favouret-icon').addEventListener("click", change_favouret_icon)
function change_favouret_icon() {
    let icon = document.getElementById('favouret-icon').innerHTML
    if (icon == 'favorite_border'){
        document.getElementById('favouret-icon').innerHTML = "favorite";
    }
    else{
        document.getElementById('favouret-icon').innerHTML = "favorite_border";
    }
}
