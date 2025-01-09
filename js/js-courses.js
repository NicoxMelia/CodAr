import {courses, know, contact} from './json-courses.js';

function makeItem(itemType, item){
    var itemContainer = document.createElement('a');
    //itemContainer.href = item.url;
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

function makeList(itemType, parent, itemsList){
    var container = document.createElement('article');
    container.classList.add(parent + '-container');
    document.querySelector('.' + parent + '-section').appendChild(container);
    for(var item of itemsList){
        var itemContainer = makeItem(itemType, item);
        itemContainer.href = item.url;
        document.querySelector('.' + parent + '-container').appendChild(itemContainer);
    }
}



window.addEventListener('load', function() {
    //this.document.querySelector('.courses-section').appendChild(makeDesktopItem("item-python", "../assets/icons/python-icon.png", "PYTHON ADOLESCENTES"));
    if(this.window.innerWidth < 660){
        makeList("item-container-mobile", "courses", courses);
        makeList("item-container-mobile", "know", know);
        makeList("item-container-mobile", "contact", contact);
    }else{
        makeList("item-container-desktop", "courses", courses);
        makeList("item-container-desktop", "know", know);
        makeList("item-container-desktop", "contact", contact);
    }
});

export{makeItem};