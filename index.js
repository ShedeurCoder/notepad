function id(id) {
    return document.getElementById(id)
}
if (localStorage.text) {
    id('theMain').value = localStorage.text
}
id('saveAs').onsubmit = e => {
    e.preventDefault()
    var downloadableLink = document.createElement('a');
    downloadableLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(id('theMain').value));
    downloadableLink.download = id('fileName').value + ".txt";
    document.body.appendChild(downloadableLink);
    downloadableLink.click();
    document.body.removeChild(downloadableLink);
}
setInterval(() => {
    localStorage.clear()
    localStorage.setItem("text", id('theMain').value)
    id('autosaving').style.display = 'block'
    setTimeout(() => {
        id('autosaving').style.display = 'none'
    }, 2000)
}, 60000)