
function validEmail(email) {
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
}
function getFormData() {
  var elements = document.getElementById("gform").elements;
  var fields = Object.keys(elements).map(function(k) {
    if(elements[k].name !== undefined) {
      return elements[k].name;
    }else if(elements[k].length > 0){
      return elements[k].item(0).name;
    }
  }).filter(function(item, pos, self) {
    return self.indexOf(item) == pos && item;
  });
  var data = {};
  fields.forEach(function(k){
    data[k] = elements[k].value;
    if(elements[k].type === "checkbox"){
      data[k] = elements[k].checked;
    }else if(elements[k].length){
      for(var i = 0; i < elements[k].length; i++){
        if(elements[k].item(i).checked){
          data[k] = elements[k].item(i).value;
        }
      }
    }
  });
  return data;
}

function handleFormSubmit(event) {  
  event.preventDefault();           
  var data = getFormData();
  document.querySelector('#submit_button').innerHTML = "Loading...";
  document.querySelector('#submit_button').disabled = true;         
  if( !validEmail(data.email) ) {   
    document.querySelector('#submit_button').innerHTML = "Invalid Email. Please Try Again.";
    document.querySelector('#submit_button').disabled = false;
    return false;
  } else {
    var url = event.target.action;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        document.querySelector('#submit_button').innerHTML = "Form Submitted. Thank You.";
        document.getElementById('gform').reset();
        document.querySelector('#submit_button').disabled = false;
        return;
    };
    var encoded = Object.keys(data).map(function(k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&')
    xhr.send(encoded);
  }
}
function loaded() {
  var form = document.getElementById('gform');
  form.addEventListener("submit", handleFormSubmit, false);
};
document.addEventListener('DOMContentLoaded', loaded, false);