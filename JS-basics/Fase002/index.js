const classA = [
    { 
        name: "Gabriela",
        grade: 9.8
    },
    { 
        name: "Bolacha",
        grade: 2
    },
    { 
        name: "Jacquin",
        grade: 7
    }
]

const classB = [
    { 
        name: "Eduardo",
        grade: 10
    },
    { 
        name: "Tim",
        grade: 4
    },
    { 
        name: "Frida",
        grade: 9
    }
]

function calculateAverage(students) {
    let sum = 0

    for (let i = 0; i < students.length; i++){
        sum = sum + students[i].grade
    }

    const average = sum / students.length

    return average
}



function sendMessage (average, class) {
    if(average > 5) {
        console.log(`The average of class ${class} was ${average}. Congratulations!`)
    } else {
        console.log(`The average of class ${class} was below 5.`)
    }
}

function markAsFlunked (student) {
    student.flunked = false

    if (student.grade < 5) {
        student.flunked = true
    }
}

function sendFlunkedMessage (student) {
    if (student.flunked) {
        console.log(`The student ${student.name} is flunked!`)
    }   
}

function studentsflunked(students) {
    for (let student of students) {
        markAsFlunked(student)
        sendFlunkedMessage(student)
    }
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMessage(average1, 'A')
sendMessage(average2, 'B')

studentsflunked(classA)
studentsflunked(classB)