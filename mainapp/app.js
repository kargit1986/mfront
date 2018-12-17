console.log('test');

var loadJsFile = function(url, implementationCode, location){
    //url is URL of external file, implementationCode is the code
    //to be called from the file, location is the location to 
    //insert the <script> element

    var scriptTag = document.createElement('script');
    scriptTag.src = url;
    scriptTag.onload = implementationCode;
    scriptTag.onreadystatechange = implementationCode;
    location.appendChild(scriptTag);
    window.addEventListener("reactapp:added",function(e) {
            document.body.innerHTML += " <angular-app title='Angular component'></angular-app>";
    })
};
var onAngularAppLoaded = function(){
document.body.innerHTML += " <angular-app title='Angular component'></angular-app>";
}
loadJsFile('dist/angular.bundle.js', onAngularAppLoaded, document.body);

 