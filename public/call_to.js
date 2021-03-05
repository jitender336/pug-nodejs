function viewPost(){
    const Http = new XMLHttpRequest();
const url='http://localhost:8000/post';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  alert(Http.responseText)
}
}