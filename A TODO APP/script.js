function addText(){
    var accept = prompt('Enter A TODO LIST?')
    
    var h1 = document.createElement('h1')
    var text = document.createTextNode('TODO-->: ' + accept)
    h1.setAttribute('id' , 'addText');
    h1.appendChild(text);
    document.getElementById('resultant').appendChild(h1);
}

function reset(){
    document.getElementById('addText').remove();
}