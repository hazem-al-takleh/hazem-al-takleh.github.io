// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
        const top = window.scrollY;
        if (top >= 400) {
            header.classList.add('navbarDark');
            header.classList.add('shadow');
        } else {
            header.classList.remove('navbarDark');
            header.classList.remove('shadow');
        }
    }
    // collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})

function sendEmail() {
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var subject = document.getElementById('subject').value
    var emailBody = document.getElementById('body').value
    var myEmail = 'hazem.thecla.ht@gmail.com'
    var smtpEmail = 'hamzeh.tamzeeh@gmail.com'
    var smtpPass = '123456789aaaa@@@@'
    Email.send({
            Host: "smtp.gmail.com",
            Username: smtpEmail,
            Password: smtpPass,
            To: myEmail,
            From: email,
            Subject: subject,
            Body: emailBody,
        })
        .then(function(message) {
            alert("Mail has been sent successfully")
        });
}