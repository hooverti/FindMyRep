function initAutocomplete(){
    const input = document.getElementById("search");
    const options = {
        componentRestrictions: { country: "us" },
        fields: ["address_components"],
        types: "address"
    };
    const searchBox = new google.maps.places.Autocomplete(input, options);
    
    searchBox.addListener("places-changed", () => {
        const places = searchBox.getPlaces();

        if (places.length == 0){
            return;
        }
    });
}

window.initAutocomplete = initAutocomplete;