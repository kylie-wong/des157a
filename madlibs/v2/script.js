(function() {

    'use strict';
    console.log('reading js');

    const form = document.querySelector('form');
    const madlib = document.querySelector('#madlib');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const adj = document.querySelector('#adj').value;
        const person1 = document.querySelector('#person1').value;
        const person2 = document.querySelector('#person2').value;
        const vehicle = document.querySelector('#vehicle').value;
        const verb = document.querySelector('#verb').value;
        const restaurant = document.querySelector('#restaurant').value;
        const sound = document.querySelector('#sound').value;
        const food = document.querySelector('#food').value;
        const animal = document.querySelector('#animal').value;
        const sound2 = document.querySelector('#sound2').value;
        const celebrity = document.querySelector('#celebrity').value;
        const place = document.querySelector('#place').value;

        //console.log('blha');
        console.log(adj);
        console.log(person1);
        console.log(person2);
        console.log(vehicle);
        console.log(verb);
        console.log(restaurant);
        console.log(sound);
        console.log(food);
        console.log(animal);
        console.log(sound2);
        console.log(celebrity);
        console.log(place);

        if (adj) {
            // const favwordInsert = document.querySelector('#favwordInsert');
            const myText = `On a <span>${adj}</span> morning, <span>${person1}</span>, <span>${person2}</span> and I packed our <span>${vehicle}</span> and set out on a road trip. We began our journey <span>${verb}</span> down the highway, excited for our first stop. Soon we approached <span>${restaurant}</span>, our stomachs began to <span>${sound}</span> and we stopped to grab ${food}. We continued on our way. All of a sudden a <span>${animal}</span> leaped into the road and we screamed <span>${sound2}</span>. Despite the surprise, we enjoyed our trip seeing the famous statue of <span>${celebrity}</span>. Finally, we reached our destination, ready to explore <span>${place}</span>`;


            document.querySelector('#story').innerHTML = myText;
            document.querySelector('#forminput').style.display = 'none';
            document.querySelector('#madlib').className = "showing green";


        } else {
            document.querySelector('#adj').setAttribute(
                'placeholder', 'Please enter a word');
        }
       
    })

})(); 