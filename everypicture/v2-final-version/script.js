(function() {
    'use strict';
    console.log('reading js');
    const popup = document.querySelector('#popup');
    const popupImg = document.querySelector('#popup-img');
    const closePopup = document.querySelector('.close');
    
    // when first img is clicked inside a pair, make popup the alt img in the pair
    document.querySelectorAll('.img-pair').forEach(function(pair) {
        pair.addEventListener('click', function() {
        const altImg = this.querySelector('.alt'); // change to alt img
        popupImg.src = altImg.src; // make popup the alt img
        popup.style.display = 'flex'; // change style of popup
        });
    });

    closePopup.addEventListener('click', function() {
        popup.style.display = 'none'; // closes popup on click
    });
})();