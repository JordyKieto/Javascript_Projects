// Example 2-3. Chaining calls using then and catch

// Both then & catch return promise objects 
// So callback regisrttion is usually done by chaining them together

loadImage('security_holes.png').then(function (img) {
    document.body.appendChild(img);
}).catch(function (e) {
    console.log('Error occured while loading image');
    console.log(e)
})