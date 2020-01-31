function variavel() {
  texto1 = document.getElementById('texto').value;
  document.getElementById("varLength").innerHTML = texto1.length;
  document.getElementById("varUpper").innerHTML = texto1.toUpperCase();
  console.log(texto1.length);
  console.log(texto1.toUpperCase());
}

  let computer1 = new Object();
  computer1.name = "My Computer";
  computer1.memorySpace = 1024;
  computer1.screenSize = 15;
  computer1.processor = 2.4;

  computer1.turnOn = function() {
    console.log("Turning On the computer.");
  }
  computer1.turnOff = function() {
    console.log("Turning Off the computer.");
  }
  computer1.formatC = function() {
    console.log("Formatting the Unit C.");
  }
  computer1.runVideo = function() {
    console.log("Starting Video.");
  }


  let computer2 = {
    name: "Other computer",
    memorySpace: 2048,
    screenSize: 16,
    processor: 3.0,

    turnOn: function() {
      console.log("Turning On the computer.");
    },
    turnOff: function() {
      console.log("Turning Off the computer..");
    },
    formatC: function() {
      console.log("Formatting the Unit C.");
    },
    runVideo: function() {
      console.log("Starting Video.");
    }
}

/*
function Person(firstName, lastName) {
  this.FirstName = firstName || "unknown";
  this.LastName = lastName || "unknown";            
}

Person.prototype.getFullName = function () {
  return this.FirstName + " " + this.LastName;
}

function Student(firstName, lastName, schoolName, grade)
{
    Person.call(this, firstName, lastName);

    this.SchoolName = schoolName || "unknown";
    this.Grade = grade || 0;
}

//Student.prototype = Person.prototype;
Student.prototype = new Person();
Student.prototype.constructor = Student;

var std = new Student("James","Bond", "XYZ", 10);
            
alert(std.getFullName()); // James Bond
alert(std instanceof Student); // true
alert(std instanceof Person); // true
*/