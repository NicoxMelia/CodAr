import {courses} from './json-courses.js';

function makeDesktopItem(itemClass, itemImgSrc, itemName, itemUrl){
    var itemContainer = document.createElement('a');
    itemContainer.href = itemUrl;
    itemContainer.classList.add('item-container');
    itemContainer.classList.add(itemClass);
    var itemTop = document.createElement('div');
    itemTop.classList.add('item-top');
    var itemBottom = document.createElement('div');
    itemBottom.classList.add('item-bottom');
    var itemImg = document.createElement('img');
    itemImg.classList.add('item-img');
    var itemTitle = document.createElement('h5');
    itemTitle.classList.add('item-title');
    itemTitle.innerHTML = itemName;
    itemImg.src = itemImgSrc;
    itemTop.appendChild(itemImg);
    itemBottom.appendChild(itemTitle);
    itemContainer.appendChild(itemTop);
    itemContainer.appendChild(itemBottom);

    return itemContainer;
    
}

function makeDesktopList(){
    var container = document.createElement('div');
    container.classList.add('courses-container');
    document.querySelector('.courses-section').appendChild(container);
    for(var item of courses){
        var itemContainer = makeDesktopItem(item.class, item.icon, item.name, item.url);
        document.querySelector('.courses-container').appendChild(itemContainer);
    }
}



window.addEventListener('load', function() {
    //this.document.querySelector('.courses-section').appendChild(makeDesktopItem("item-python", "../assets/icons/python-icon.png", "PYTHON ADOLESCENTES"));
    makeDesktopList();
});

