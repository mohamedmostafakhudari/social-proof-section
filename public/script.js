const ratings = document.querySelectorAll('#ratings li');
const rate = document.getElementById('rate');
ratings.forEach(rating => rating.addEventListener('click', select));
function select(e) {
    rate.textContent = e.target.dataset.rate;
    ratings.forEach(rating => {
        rating.classList.remove('active');
    })
    e.target.classList.add('active');
}

const submitBtn = document.getElementById('submit');
const ratingCard = document.getElementById('ratingCard');
const thankyouCard = document.getElementById('thankyouCard');
submitBtn.addEventListener('click', thankyou);
function thankyou() {
    ratingCard.classList.add('hidden');
    thankyouCard.classList.remove('hidden');
}

