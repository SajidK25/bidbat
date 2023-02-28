// Doing for the Header Section file..
fetch('layout/header.html')
    .then(response => response.text())
    .then(html => {
        document.querySelector('#header').innerHTML = html;
    });

// Doing for the Footer Section file..
fetch('layout/footer.html')
    .then(response => response.text())
    .then(html => {
        document.querySelector('#footer').innerHTML = html;
    });