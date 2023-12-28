import View from "./viewD.js";

class SearchView extends View {
    _parentElement = document.querySelector(".wrapper");

    getQuery() {
        const from = document.getElementById("destinationFr").value;
        const to = document.getElementById("destinationTo").value;
        return from + "-"+to;
}
    _clearQuery() { }
    addHandlerRender(handler) {
        this._parentElement.addEventListener("submit", function (e) {
            e.preventDefault();
            handler();
        });
    }
    
}

export default SearchView = new SearchView();
