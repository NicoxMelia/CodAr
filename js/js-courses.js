function makeDesktopItem(itemClass, itemImgSrc, itemName){
    var itemContainer = document.createElement('div');
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
    
}



window.addEventListener('load', function() {
    this.document.querySelector('.courses-section').appendChild(makeDesktopItem("item-python", "../assets/icons/python-icon.png", "PYTHON ADOLESCENTES"));
});

