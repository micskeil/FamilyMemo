$(document).ready( () => {

    let images = [
                    './img/img-1.jpg',
                    './img/img-2.jpg',
                    './img/img-3.jpg',
                    './img/img-4.jpg',
                    './img/img-5.jpg',
    ];
    let opened_cards = 0;
    let srcOfOpened = [];
    let rounds = 8;
    let found_cards = 0;

    // Choose 3 pictures random
    function randomPictures() {
        
        for (i=0; i<2; i++) {
         images.splice(Math.floor(Math.random()*images.length),1);
        }

        return images;
    };

    // Position pictures on the board
    function positioning () {
        let used_images = randomPictures();
        let positions = [ '.card-item-1' , '.card-item-2', '.card-item-3', '.card-item-4', '.card-item-5', '.card-item-6'];
        used_positions = []; 

        for (i=0; i<3; i++) {

            let position_1 = positions.splice(Math.floor(Math.random()*positions.length),1);
            let position_2 = positions.splice(Math.floor(Math.random()*positions.length),1);

            $(position_1[0]).attr("src", used_images[i]);
            $(position_2[0]).attr("src", used_images[i]);
            
            used_positions.push();
        }
    };

    // Opening and matching cards
    $('.card-item').on('click', event => {

        
        if (opened_cards < 2) {
            opened_cards = opened_cards + 1;
            srcOfOpened.push($(event.currentTarget).children().attr('src'));
            
            $(event.currentTarget).children().toggleClass('opened');

            if (srcOfOpened.lenght = 2 && srcOfOpened[0] === srcOfOpened[1]) {
                $(".opened").attr("src", './img/found_card.png');
                $(".opened").addClass("found");
                $(".opened").removeClass("opened");
                found_cards = found_cards + 2;
                $(".found-cards").html(found_cards);
            } 

        } else {            
            
            $('.card-item').children().removeClass('opened');
            rounds = rounds - 1;
            $(".rounds").html(rounds);
            opened_cards = 0;
            srcOfOpened = [];
            $('html').active();
        }

    })


    positioning();
});