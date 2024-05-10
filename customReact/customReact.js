
function reactRender(conatiner,element){
    const domElement=document.createElement(element.type);
    domElement.innerHTML=element.Child;
    for (prop in element.props){
       domElement.setAttribute('href',element.props[prop]);
    }
     conatiner.appendChild(domElement);

}
const element = {
    type:'a',
    props:{
        href:'https://google.com',
        targert:'_blank'
    },
    Child:'Click on me for google'
}
const container = document.querySelector('#root');

reactRender(container,element);

