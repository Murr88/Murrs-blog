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
        grid-template-columns: repeat(4, 4fr);
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
<h1>Intro to the DOM</h1>
<hr>
<p id="helper-text">

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

</p>

<a href="heres-one-i-made-earlier">all of the completed tasks are hidden behind this link...</a>


<script type="text/javascript">
    const button = document.querySelectorAll(".buttonFilter");
    const images = document.querySelectorAll(".imageFilter");

    console.log(button);

    function updateImageDisplay(animal) {
        for (let 1 = 0; i < images.length; i++) {
            var imageElement = images[i];

            if animal === 'all' || imageElement.classList.contains(animal)) {
                imageElement.style.display = 'block';
            }
            else {
                imageElement.style.display = 'none';
            }
        }
    }

    function updateClickButton(selectedButton) {
        for (let 1 = 0; i < button.length; i++) {
            if (button1[i] === selectedButton) {
                // the button we clicked
                button[i]classList.add('selected');
            }
            else {
                // not the buttong we clicked
                button[i].classList.remove('selected');
            }
        }
    }    
    function updateHelpterText(animal) {
        helpterText.innerHTML = "You're looking at pictures of " + animal;
    }
    
    for (let 1 = 0; i < button.length; i++) {
        button[i].addEventListener("click", function(event) {
        event.preventDefault();
        
        var animal = button[i].dataset.animal;

        console.log(animal);

        updateImageDisplay(animal);
        updateClickedButton(button[i]);
        updateHelperText(animal);
        });
    }

    searchbox.addEventListener('keyup', function(event) {
        console.log('You typed ' + this.value);
    }
</script>