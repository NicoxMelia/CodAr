import {courses} from './json-courses.js';

function makeDesktopItem(itemType, item){
    var itemContainer = document.createElement('a');
    itemContainer.href = item.url;
    itemContainer.classList.add(itemType);
    itemContainer.classList.add(item.class);
    var itemTop = document.createElement('div');
    itemTop.classList.add('item-img-container');
    var itemBottom = document.createElement('div');
    itemBottom.classList.add('item-name-container');
    var itemImg = document.createElement('img');
    itemImg.classList.add('item-img');
    var itemTitle = document.createElement('h5');
    itemTitle.classList.add('item-title');
    itemTitle.innerHTML = item.name;
    itemImg.src = item.icon;
    itemTop.appendChild(itemImg);
    itemBottom.appendChild(itemTitle);
    itemContainer.appendChild(itemTop);
    itemContainer.appendChild(itemBottom);

    return itemContainer;
    
}

function makeList(itemType){
    var container = document.createElement('div');
    container.classList.add('courses-container');
    document.querySelector('.courses-section').appendChild(container);
    for(var item of courses){
        var itemContainer = makeDesktopItem(itemType, item);
        document.querySelector('.courses-container').appendChild(itemContainer);
    }
}



window.addEventListener('load', function() {
    //this.document.querySelector('.courses-section').appendChild(makeDesktopItem("item-python", "../assets/icons/python-icon.png", "PYTHON ADOLESCENTES"));
    if(this.window.innerWidth < 660){
        makeList("item-container-mobile");
    }else{
        makeList("item-container-desktop");
    }
});

