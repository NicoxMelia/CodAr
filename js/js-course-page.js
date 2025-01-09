import {courses} from './json-courses.js';
import {makeItem} from './js-courses.js';

var urlParam = new URLSearchParams(window.location.search);
var courseParam = urlParam.get('course');
var course = courses.find(course => course.url.includes(courseParam));



var imgCont = document.querySelector('.img-container');
var description = document.querySelector('#description');

var ulCourseReq = document.querySelector('#courseReq');
var ulTechReq = document.querySelector('#techReq');

description.innerText = course.description;

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



if(window.innerWidth < 660){
   imgCont.appendChild(makeItem("item-container-mobile", course));
}else{
    imgCont.appendChild(makeItem("item-container-desktop", course));
}
