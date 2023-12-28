﻿import view from "./viewD.js";

class recipeView extends view {
    _parentElement = document.querySelector(".recipe");
    _seatView;
    addHandlerRender(handler) {
        window.addEventListener("hashchange", handler);
    }
    addHandlerUpdatePerson() { }
    addMyTickets() {
        //bookmark ekleme mantigiyla satin alma ekle biletlerim kisminda gözüksün
    }
    _generateMarkup() {
        //ekrana gönderilecek html kodu
        const head = `
      </figure>


    <div class="recipe__ingredients">
      <h2 class="heading--2">${this._data.departure} - ${this._data.arrival}</h2>
      <ul class="recipe__ingredient-list">

      <li class="recipe__ingredient">

        <div class="recipe__quantity">${this._data.seat} Seat</div>
        <div class="recipe__quantity">${this._data.time}</div>
        <div class="recipe__quantity">${this._data.planeModel}</div>
        <div class="recipe__description">
          ${this._data.price}€
        </div>
      </li>

      </ul>
      <div>
        <button  type="submit" class="nav-link btn btn-link text-dark buy hidden">Buy</button>
      </div>
    </div>


    <div class="recipe__directions">
    <div class="plane">
    <div class="cockpit">
      <h1>Please select a seat</h1>
    </div>
    <div class="exit exit--front fuselage"></div>
    <ol class="cabin fuselage">
    `;
        const seat = this._seatsView(this._data.seat);
        const end = `<div class="exit exit--back fuselage"></div>
    </ol>
  </div>
    </div>`;
        return head + seat + end;
    }
    _seatsView(seats) {
        let returnSeat;
        for (let i = 1; i <= seats / 6; i++) {
            returnSeat += `<li class="row row--${i}">
    <ol class="seats" type="A">
      <li class="seat">
        <input type="checkbox" id="${i}A" />
        <label class="seatLb" for="${i}A">${i}A</label>
      </li>
      <li class="seat">
        <input type="checkbox" id="${i}B" />
        <label class="seatLb" for="${i}B">${i}B</label>
      </li>
      <li class="seat">
        <input type="checkbox" id="${i}C" />
        <label class="seatLb" for="${i}C">${i}C</label>
      </li>
      <li class="seat">
        <input type="checkbox" id="${i}D" />
        <label class="seatLb" for="${i}D">${i}D</label>
      </li>
      <li class="seat">
        <input type="checkbox" id="${i}E" />
        <label class="seatLb" for="${i}E">${i}E</label>
      </li>
      <li class="seat">
        <input type="checkbox" id="${i}F" />
        <label class="seatLb" for="${i}F">${i}F</label>
      </li>
    </ol>
  </li>`;
        }



        return returnSeat;
    }


}

export default recipeView = new recipeView();
