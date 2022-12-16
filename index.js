function initAutocomplete(){
    const input = document.getElementById("search");
    const searchBox = new google.maps.places.SearchBox(input);
    
    searchBox.addListener("places-changed", () => {
        const places = searchBox.getPlaces();

        if (places.length == 0){
            return;
        }
    });
}

window.initAutocomplete = initAutocomplete;