addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < 20; i++) {
        let img = document.createElement('img');
        img.src = ((Math.random() * 3) | 0) + '.png';
        document.querySelector('div').append(img);
    }

});
