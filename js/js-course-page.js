import {courses} from './json-courses.js';
import {makeItem} from './js-courses.js';

var urlParam = new URLSearchParams(window.location.search);
var courseParam = urlParam.get('course');
var course = courses.find(course => course.url.includes(courseParam));



var imgCont = document.querySelector('.img-container');
var description = document.querySelector('#description');

var ulCourseReq = document.querySelector('#courseReq');
var ulTechReq = document.querySelector('#techReq');

for(var req in course.courseRequirements){
    var li = document.createElement('li');
    li.innerText = req + ': ' + course.courseRequirements[req];
    ulCourseReq.appendChild(li);
}

for(var req in course.technicalRequirements){
    var li = document.createElement('li');
    li.innerText = course.technicalRequirements[req];
    ulTechReq.appendChild(li);
}

for(var key in course.description){
    if(typeof(course.description[key]) == 'string'){
        var h5 = document.createElement('h5');
        h5.innerText = course.description[key];
        description.appendChild(h5);
    }else{
        var title = document.createElement('h5');
        title.innerText = course.description[key].title;
        description.appendChild(title);
        var ul = document.createElement('ul');
        course.description[key].items.forEach(item => {
            var li = document.createElement('li');
            li.innerText = item;
            ul.appendChild(li);
        });
        description.appendChild(ul);
    }
}



if(window.innerWidth < 660){
   imgCont.appendChild(makeItem("item-container-mobile", course));
}else{
    imgCont.appendChild(makeItem("item-container-desktop", course));
}
