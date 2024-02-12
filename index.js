var students =[
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 2 },
    { name: 'Charlie', age: 21 },
];
//var str = []
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