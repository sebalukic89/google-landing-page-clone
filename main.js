const searchInput = document.querySelector('#search-input')


searchInput.addEventListener('keydown', function (e) {
    if (e.code === 'Enter') {
        search();
    }
});

function search() {
    const input = searchInput.value;

    window.location.href = "https://www.google.com/search?q=" + input + "&sxsrf=AOaemvJCziOXXEr0pw21jeBIHLgA-mxKlg%3A1630935954523&ei=khs2YbSUH_iJjLsPyK-VqAw&oq=" + input + "&gs_lcp=Cgdnd3Mtd2l6EANKBAhBGABQAFgAYLWnBGgAcAJ4AIABAIgBAJIBAJgBAA&sclient=gws-wiz&ved=0ahUKEwi0peHxveryAhX4BGMBHchXBcUQ4dUDCA4&uact=5"
}