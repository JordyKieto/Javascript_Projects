// Reguar expressions are patterns used to match pattern combos
// used with exec & test methods of RegExp
// and with match replace search spit methods of String

// regular expression literal; pattern between two slashes
var re = /ab+c/;

var re = new RegExp('ab+c')

// Writing a  simple regular expression pattern
// the pattern /abc/ matches exact combination in string, 'abc' together in that order.

// Using special characters
// /ab*c/ matches any character that is 'a' followed by 'b*' which 
// means '*' zero or more occureces of preceeding character, followed by c
// "cbbabbbbcdebc," pattern matches substring 'abbbbc'

