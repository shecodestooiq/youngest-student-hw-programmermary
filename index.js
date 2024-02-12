var students = [{name : 'maryam' , age:23} , {name:'noor ' , age :13} , {name : 'soundos' , age:25} , {name:'hassan' , age : 30}]
function showYoungestStudent(std) {
    if (!std || std.length === 0) {
        console.log("No students provided.");
        return;
      }
      var minAge = std[0].age; 
      var youngestName = std[0].name;
      for (var i = 1; i < std.length; i++) {
        if (std[i].age < minAge) {
          minAge = std[i].age;
          youngestName = std[i].name
        }
      }
    
      console.log(youngestName);
    }
    showYoungestStudent(students)
module.exports = showYoungestStudent;