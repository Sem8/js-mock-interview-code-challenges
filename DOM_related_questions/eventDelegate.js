<ul id="listToDestroy">
    <li><a href="#">first item</a></li>
    <li><a href="#">second item</a></li>
    <li><a href="#">third item</a></li>
    <li><a href="#">forth item</a></li>
    <li><a href="#">Fifth item</a></li>
</ul>

document.getElementById('listToDestroy').addEventListener('click', function(e) {
    let listElm = e.target.parentNode;
    listElm.parentNode.removeChild(listElm);
    e.preventDefault();
});