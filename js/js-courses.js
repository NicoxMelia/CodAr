import {courses, know, contact} from './json-courses.js';

function makeItem(item){
    var itemContainer = document.createElement('a');
    itemContainer.classList.add("item");
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

function makeList(parent, itemsList){
    var container = document.createElement('article');
    container.classList.add(parent + '-container');
    document.querySelector('.' + parent + '-section').appendChild(container);
    for(var item of itemsList){
        var itemContainer = makeItem(item);
        itemContainer.href = item.url;
        document.querySelector('.' + parent + '-container').appendChild(itemContainer);
    }
}



window.addEventListener('load', function() {
    makeList("courses", courses);
    makeList("know", know);
    makeList("contact", contact);
});

//660px hacia abajo - version mobile

export{makeItem};