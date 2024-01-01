import View from "./viewD.js";

class ResultsView extends View {
    _parentElement = document.querySelector(".results");
    _errorMessage = "No flight found for your query. Please try again";

    _generateMarkup() {
        const id = window.location.hash.slice(1);
        return this._data
            .map((result) => {
                return `<li class="preview">
      <a class="preview__link ${result.id === id ? "preview__link--active" : ""
                    }" href="#${result.id}">

        <div class="preview__data">
          <h4 class="preview__title">${result.departure} - ${result.arrival
                    }</h4>
          <p class="preview__publisher">${result.time}</p>
          <div class="preview__user-generated">
        </div>
        </div>
      </a>
    </li>`;
            })
            .join("");
    }
}

export default new ResultsView();
