
const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function(event) {

    event.preventDefault();

    const serviceID = 'service_0aq6m1i';
    const templateID = 'template_ohq2h8g';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
        }, (err) => {
        alert(JSON.stringify(err));
    });
    setTimeout(function() {
        location.href = "thankyou-page.html";
    }, 1000)

    localStorage.removeItem('productsInCart');
    localStorage.removeItem('totalCost');
    localStorage.removeItem('cartNumbers');


   
});
