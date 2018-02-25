// Using callbacks
// We are passing both functions to loadImage, then defining it later
loadImage('shadowfacts.png',
    function onsuccess(img) {
        // Add the image to the current web page
        document.body.appendChild(img);
    },
    function onerror(e) {
        console.log('Error occured while loading image');
        console.log(e);
    }
);
// Defining how our method that takes callbacks will work
// 
function loadImage(url, success, error) {
    var img = new Image();
    img.src = url;

    img.onload = function () {
        success(img);
    };

    img.onerror = function (e) {
        error(e);
    };
}

// loadImage loads an image by setting src property
// Browser asynchronously loads the image based on src
// Queues up onload or onerror callback after it's done
// **Since loadImage is async it accepts callbacks**
//     instead of immidiately returning the image from the function