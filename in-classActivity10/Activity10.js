$( function() {
  
  $( "#birthday" ).datepicker();

  var languages = [
    "Asp", "Bash", "C", "C#", "C++","Crystal", "Dart", "Delphi", "Elixir", "Elm", "Erlang", "F#", "Fortran","Go", "Groovy", "Haskell", "HTML", "Java", "JavaScript", "Julia", "Kotlin","Lisp", "MATLAB", "Nim", "Objective-C", "Pascal", "Perl", "PHP", "Python","R", "Ruby", "Rust", "Scala", "Shell", "SQL", "Swift", "TypeScript", "Visual Basic"
  ];
  
  $("#language").autocomplete({
    source: languages
  });
  
});