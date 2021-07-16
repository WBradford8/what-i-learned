const noteToFind = 3
const notes = [
    {
        id : 1,
        subject : "JS Notes",
        date : "7/16",
        feeling : "growth mindset",
        timeSpent : 5400
    },
    {
        id : 2,
        subject : "Github Notes",
        date : "7/15",
        feeling : "fixed mindset, but moving towards growth",
        timeSpent : 480
    }
]

const noteAboutToday = {
    id : 3,
    subject : "technical troubleshooting",
    date : "on going",
    feeling : "glad I'm on PC",
    timeSpent : 20
}

notes.push(noteAboutToday)
for (const note of notes) {
    if (note.id === noteToFind) {
    console.log(`Note ${note.id}
    ${note.date}
    I learned ${note.subject}
    I spent ${note.timeSpent}
    I felt ${note.feeling}
    --------------`)
    }
}