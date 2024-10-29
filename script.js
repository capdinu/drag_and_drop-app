// script.ts
// Selecting elements with specific types
var cards = document.querySelectorAll('.card');
var container = document.querySelector('.container');
var draggedCard = null;
if (container) {
    // Adding event listeners for each card
    cards.forEach(function (card) {
        card.addEventListener('dragstart', dragStart);
        card.addEventListener('dragend', dragEnd);
    });
    // Adding event listeners for the container
    container.addEventListener('dragover', dragOver);
    container.addEventListener('drop', drop);
    function dragStart(e) {
        var _this = this;
        draggedCard = this;
        setTimeout(function () {
            _this.style.display = 'none';
        }, 0);
    }
    function dragEnd() {
        var _this = this;
        setTimeout(function () {
            _this.style.display = 'block';
            draggedCard = null;
        }, 0);
    }
    function dragOver(e) {
        e.preventDefault();
    }
    function drop(e) {
        e.preventDefault();
        if (draggedCard && container) {
            container.appendChild(draggedCard);
        }
    }
}