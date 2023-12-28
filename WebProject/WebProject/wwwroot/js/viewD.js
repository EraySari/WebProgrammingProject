
export default class View {
    _data;

    /*
    renderSpinner = function () {
        const add = `<div class="spinner">
    <svg>
      <use href="${icons}#icon-loader"></use>
    </svg>
  </div>`;

        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', add);
        console.log(icons);
    };
    */
    render(data) {

        this._data = data; // buradaki data, data.recipe den geliyor.(Controller araciligiyla)
        if (this._parentElement !== "") this._clear();

        const markup = this._generateMarkup(); //string döndürüyo (eklencek kodu)

        this._parentElement.innerHTML = "";
        this._parentElement.insertAdjacentHTML("afterbegin", markup);

    }
    _clear() {
        this._parentElement.innerHTML = "";
    }
}
