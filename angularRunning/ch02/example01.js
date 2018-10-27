// to define a module named notes app
angular.module('notesApp', []);

// to define a module named notes app with two depencies
angular.module('notesApp', 
        ['notesApp.ui', 'thirdCompany.fusioncharts']);

// to load an exsisting module that exists in an other file
//      file needs to be loaded into html
angular.module('notesApp', []);