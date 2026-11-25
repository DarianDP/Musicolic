function SetStar(rating) {
const chequeao = document.querySelector('#rating-star input:checked');
if(chequeao) chequeao.checked = false;

const star = document.querySelector(`#rating-star input[value="${rating}"]`);
    if (star) star.checked = true;

}

