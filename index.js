var students = [{name : 'maryam' , age:23} , {name:'noor ' , age :13} , {name : 'soundos' , age:25} , {name:'hassan' , age : 30}]
function showYoungestStudent(students) {
    if (!students || students.length === 0) {
        console.log("No students provided or the list is empty.");
        return;
      }
    
     
      var min = students[0].age; 
      for (var i = 0; i < students.length; i++) {
        if (students[i].age < min) {
          min = students[i].age;
        }
      }
    
      console.log("The minimum age is " + min);
    }
    showYoungestStudent(students)
module.exports = showYoungestStudent;