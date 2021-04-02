---
layout: layouts/home.njk
title: Animals
templateClass: tmpl-post
eleventyNavigation:
  key: Animals
  order: 8
---
<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }

    img {
        height: 200px;
        width: 200px;
    }

    button {
        border: 1px solid black;
    }
    .selected {
        border: 1px solid red;
    }
</style>    
<h1>Intro to the DOM - Practical</h1>
<hr>
<p id="helper-text"></p>

<div>
    <form>
        <fieldset>
            <button data-animal="cat" class="buttonFilter">Cats</button>
            <button data-animal="bird" class="buttonFilter">Birds</button>
            <button data-animal="dog" class="buttonFilter">Dogs</button>
            <button data-animal="tiger" class="buttonFilter">Tigers</button>
            <button data-animal="all" class="buttonFilter">All</button>
        </fieldset>
    </form>
    <div class="grid">
        <div class="imageFilter cat">
            <img src="/img/animals/cats/cat1.jpg" />
        </div>    
        <div class="imageFilter cat">
            <img src="/img/animals/cats/cat2.jpg" />
        </div>
        <div class="imageFilter cat">
            <img src="/img/animals/cats/cat3.jpg" />
        </div>
        <div class="imageFilter cat">
            <img src="/img/animals/cats/cat4.jpg" />
        </div>
        <div class="imageFilter bird">
            <img src="/img/animals/birds/birds1.jpg" />
        </div>
        <div class="imageFilter bird">
            <img src="/img/animals/birds/birds2.jpg" />
        </div>
        <div class="imageFilter bird">
            <img src="/img/animals/birds/birds3.jpg" />
        </div>
        <div class="imageFilter bird">
            <img src="/img/animals/birds/birds4.jpg" />
        </div>
        <div class="imageFilter dog">
            <img src="/img/animals/dogs/dogs1.jpg" />
        </div>
        <div class="imageFilter dog">
            <img src="/img/animals/dogs/dogs2.jpg" />
        </div>
        <div class="imageFilter dog">
            <img src="/img/animals/dogs/dogs3.jpg" />
        </div>
        <div class="imageFilter dog">
            <img src="/img/animals/dogs/dogs4.jpg" />
        </div>
        <div class="imageFilter tiger">
            <img src="/img/animals/tigers/tigers1.jpg" />
        </div>
        <div class="imageFilter tiger">
            <img src="/img/animals/tigers/tigers2.jpg" />
        </div>
        <div class="imageFilter tiger">
            <img src="/img/animals/tigers/tigers3.jpg" />
        </div>
        <div class="imageFilter tiger">
            <img src="/img/animals/tigers/tigers4.jpg" />
        </div>
    </div> 
</div>

<a href="heres-one-i-made-earlier">all of the completed tasks are hidden behind this link...</a>

<script type="text/javascript">
    const button = document.querySelectorAll(".buttonFilter");
    const images = document.querySelectorAll(".imageFilter");
    const helperText = document.querySelector('#helper-text');

    console.log(button);

    function updateImageDisplay(animal) {
        for (let i = 0; i < images.length; i++) {
            var imageElement = images[i];

            if (animal === 'all' || imageElement.classList.contains(animal)) {
                imageElement.style.display = 'block';
            }
            else {
                imageElement.style.display = 'none';
            }
        }
    }

    function updateClickedButton(selectedButton) {
        for (let i = 0; i < button.length; i++) {
            if (button[i] === selectedButton) {
                // the button we clicked
                button[i].classList.add('selected');
            }
            else {
                // not the buttong we clicked
                button[i].classList.remove('selected');
            }
        }
    }    
    function updateHelperText(animal) {
        helperText.innerHTML = "You're looking at pictures of " + animal + ".";
    }
    
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener("click", function(event) {
            event.preventDefault();
        
            var animal = button[i].dataset.animal;

            console.log(animal);

            updateImageDisplay(animal);
            updateClickedButton(button[i]);
            updateHelperText(animal);
        });
    }

    // searchBox.addEventListener('keyup', function(event) {
    //         var mySearchTerm = this.value;

    //         for (let i = 0; i < images.length; i++) {
    //             var dave = images[i];
                
    //             if (mySearchTerm === 'all' || dave.getAttribute('class').includes(mySearchTerm)); {
    //                 dave.style.display = 'block';
    //             }
    //             else {
    //                 dave.style.display = 'none';
    //             }
    //         }
    //     }    
    // );

    function keyup(event) {
        var mySearchTerm = this.value;

        for (let i = 0; 0 < images.length; i++) {
            var dave = images[i];

            if (mySearchTerm === 'all' || dave.getAttribute('class').includes(mySearchTerm)) {
                dave.style.display = 'block';
            }
            else {
                dave.style.display = 'none';
            }
        }
    }
    searchBox.addEventListener('keyup', keyupFunction
    );
</script>