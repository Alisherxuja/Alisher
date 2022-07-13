let switchMode = document.getElementById('switchMode');

switchMode.onclick = function() {
    let theme = document.getElementById('theme');

    if (theme.getAttribute('href') == './css/main.css') {
        theme.href = './css/dark-mode.css'
    } else {
        theme.href = './css/main.css'
    }

}




