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
    let no_of = document.getElementById('no_of')
    function changeImg(src) {
    img.src=src
    }
    for(i=0; i<imgs.length; i++) {
        let v = imgs[i].src;
        imgs[i].addEventListener("click", function(){changeImg(v)}, false);
    }
    function decrease_product() {
    if (Number(no_of.value) > 1){
        no_of.value = Number(no_of.value)-1
    }
    }
    function increase_product() {
    no_of.value = Number(no_of.value) + 1        
    }
    // For tabs
    $(document).ready(function(){
    $('.tabs').tabs();
    });

