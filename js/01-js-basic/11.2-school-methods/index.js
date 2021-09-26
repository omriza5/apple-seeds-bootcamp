const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],
};

const findPerson = (id, type) => {
  return school[type].find((item) => item.id === id);
};

// console.log(findPerson(1, "teachers"));

const assignStudent = (studentId, subject) => {
  const teacher = school.teachers.find((t) => t.subjects.includes(subject));
  if (teacher) {
    if (teacher.capacityLeft > 0) {
      teacher.students.push(studentId);
      teacher.capacityLeft--;
    } else {
      console.log("Sorry,no available teachers left");
    }
  } else {
    console.log("Teacher was not found");
  }
};

const assignTeachersSubject = (teacherId, subject) => {
  const { subjects } = school.teachers.find((t) => t.id === teacherId);

  if (!subjects.includes(subject)) {
    subjects.push(subject);
  }
};

console.log(school.teachers[1]);
assignTeachersSubject(1, "Math");
console.log(school.teachers[1]);
