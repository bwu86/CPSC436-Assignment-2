//Initial array with welcome messages
messageObj = {"messages":["Welcome to Noter!", "Try entering your own message above, and click submit."], "images":[]};

//Adds message to the array and updates the 'ul', used on-click
function addMessage(){       
     let input = document.getElementById("message-box").value;
    if(input){
        let newItem = document.createElement('li');
        newItem.innerHTML = input;
        document.getElementById('the_msgs').appendChild(newItem);
        clearBox();
    }
}

//Still need to finish this
function changeImage(event) {
    let image = new Image();
    let linebreak = document.createElement("br");
    image.src = URL.createObjectURL(event.target.files[0])
    document.getElementById("images").appendChild(image);
    document.getElementById("images").appendChild(linebreak);
}


//Pops the last message from the message list
function removeLastMessage(){
    var lastMsg = document.getElementById("the_msgs");
    lastMsg.removeChild(lastMsg.lastChild);
}

function removeLastImage(){
    var lastImage = document.getElementById("images");
    lastImage.removeChild(lastImage.lastChild);
    lastImage.removeChild(lastImage.lastChild);
}

//Clears the message box after click
function clearBox(){
    document.getElementById("message-box").value = "";
}

//Cretes a 'ul' element and loads items from the array into it
function displayMessages(){

    for (let i = 0; i < messageObj.messages.length; i++){
        //Creates list item
        let item = document.createElement('li');

        //Set contents
        item.innerHTML = messageObj.messages[i];

        //Add contents to the list
        document.getElementById('the_msgs').appendChild(item);
    }
}

function displayImages(){
    var list = document.createElement('ul');

    for (let i = 0; i < messageObj.images.length; i++){
        //Creates list item
        var item = document.createElement('li');
        var image = document.createElement('img');
        image.src = messageObj.images[i];

        //Set contents
        item.appendChild(img);
        //Add contents to the list
        list.appendChild(item);
    }
    return list;
}

function updateImg(){
    document.getElementById('images_div').innerHTML = "";
    document.getElementById('images_div').appendChild(printImgSrc());
    // .appendChild(displayImages());
}

function submitOnEnter(event){
    if(event.which === 13){
        event.preventDefault(); // Prevents the addition of a new line in the text field (not needed in a lot of cases)
        addMessage();
    }
}

function removeAllMessages(){
    document.getElementById('the_msgs').innerHTML='';
}

function removeAllImages(){
    document.getElementById("images").innerHTML="";
}

//Sets the welcome message
window.onload = displayMessages;

