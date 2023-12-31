﻿import View from './viewD.js';


class BuyTicket extends View {

    _parentElement = document.querySelector(".add-recipe-window");
    _window = document.querySelector('.add-recipe-window');
    _overlay = document.querySelector('.overlay');
    _selectedSeat;
    _selectedSeatNumber;
    _currentFl;

    bookingTicket(currentFlight) {
        document.querySelector(".buy").addEventListener("click", this.buying.bind(this));
        this._currentFl = currentFlight;
        
    }

    
    buying() {
        this._overlay.classList.toggle('hidden');
        this._window.classList.toggle('hidden');
        this.succesMessage(this._selectedSeat.getAttribute('for'));

        setTimeout(this.closeWindow.bind(this), 2 * 1000);

        this._selectedSeat.previousElementSibling.setAttribute('disabled', '');
        document.querySelector('.buy').classList.toggle('hidden');

        this._currentFl.reservedSeat.push(this._selectedSeat.getAttribute('for'));

        localStorage.setItem(`${this._currentFl.id}`, `${this._currentFl.reservedSeat}`);

    }

    selectSeat() {
        const seats = document.querySelectorAll('.seatLb');
        seats.forEach((seat) => {
            seat.addEventListener('click', this.setSelectedSeat.bind(this, seat));
            
        })
        
    }
    setSelectedSeat(seat) {
        this._selectedSeat = seat;
        document.querySelector('.buy').classList.toggle('hidden');
        console.log('a');
        this._selectedSeatNumber = this._selectedSeat.getAttribute('for');
    }

    succesMessage(info) {
        const message = `<div class="message">
    <div>
      
    </div>
    <p>${info} buying.</p>
  </div>`;

        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', message);
        console.log(this._currentFl);
        
    }
    closeWindow() {
        
        this._overlay.classList.add('hidden');
        this._window.classList.add('hidden');
    }
}
export default BuyTicket = new BuyTicket();