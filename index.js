var students = [{name : 'maryam' , age:23} , {name:'noor ' , age :13} , {name : 'soundos' , age:25} , {name:'hassan' , age : 30}]
function showYoungestStudent(std) {
    if (!std || std.length === 0) {
        console.log("No students provided or the list is empty.");
        return;
      }
      var min = std[0].age; 
      for (var i = 0; i < std.length; i++) {
        if (std[i].age < min) {
          min = std[i].age;
          var name = std[i].name
        }
      }
    
      console.log("The name of youngest student is " , name ,"and his age ", min);
    }
    showYoungestStudent(students)
module.exports = showYoungestStudent;