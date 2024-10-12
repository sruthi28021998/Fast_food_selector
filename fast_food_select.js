let fastFoodImageUrls = {
    burger: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/972a37599772cdc7df93a0855ad87591",
    pizza: "https://recipesblob.oetker.in/assets/d8a4b00c292a43adbb9f96798e028f01/1272x764/pizza-pollo-arrostojpg.jpg",
    manchurian: "https://th-i.thgim.com/public/incoming/rycbtc/article67895056.ece/alternates/FREE_1200/iStock-1334115358.jpg",
    noodles: "https://www.chilipeppermadness.com/wp-content/uploads/2023/06/Gochujang-Noodles-Recipe1.jpg",
    tacos: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/29/0/0149359_Making-Taco_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1371603491866.webp"
};

let fastFoodSelectEl = document.getElementById("fastFoodSelect");
let fastFoodImgEl = document.getElementById("fastFoodImg");

fastFoodSelectEl.addEventListener("change", function(event) {
    let selectedfastFood = event.target.value;
    let selectedfastFoodImgUrl = fastFoodImageUrls[selectedfastFood];
    fastFoodImgEl.src = selectedfastFoodImgUrl;
});