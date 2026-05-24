function toggleManuscript() {

    const content =
    document.getElementById('manuscriptContent');

    const btn =
    document.getElementById('toggleBtn');

    if(content.classList.contains('show')){

        content.classList.remove('show');

        btn.innerHTML =
        '▼ Ipakita ang Manuscript';

    } else {

        content.classList.add('show');

        btn.innerHTML =
        '▲ Itago ang Manuscript';
    }
}