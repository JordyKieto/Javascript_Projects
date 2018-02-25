// One promise with multiple consumers

//    when multiple pieces of code are interested
//    in the outcome of the same async operation 
//    they can use the same promise

var user = {
    profilePromise: null,

    getProfile: function () {
        if (!this.profilePromise) {
            // Assume ajax() returns a promise that is eventually
            // fufilled with {name: 'Samantha', subsribedToSpam: true}
            this.profilePromise = ajax(/*someurl*/);
        }
        return this.profilePromise;
    }
};

var navbar = {
    show: function (user) {
        user.getProfile().then(function (profile) {
            console.log('*** Navbar ***');
            console.log('Name: ' + profile.name);
        });
    }
};

var account = {
    show: function (user) {
        user.getProfile().then(function (profile) {
            console.log('*** Account Info ***');
            console.log('Name: ' + profile.name)
            console.log('Send lots of email? ' + profile.subscribedToSpam)
        });
    }
};

navbar.show(user);
account.show(user);

// user.profilePromise is a place holder for above methods
// a promise is a placeholder for the results of an operation