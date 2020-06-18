const fs = require("fs")
const path = require("path")

// fs.mkdir(path.join(__dirname, "notes"),
//          err => {
//              if (err) throw err

//              console.log("Папка создана")
//          }
// )

// fs.writeFile(
//     path.join(__dirname, "notes", "mynotes.txt"),
//     "Hello world",
//     err => {
//         if (err) throw err

//         console.log("Файл был создан")
//         fs.appendFile(
//             path.join(__dirname, "notes", "mynotes.txt"),
//             " from file system",
//             err => {
//                 if (err) throw err

//                 console.log("Файл изменен")
//                 fs.readFile(
//                     path.join(__dirname, "notes", "mynotes.txt"),
//                     "utf-8",
//                     (err, data) => {
//                         if (err) throw err

//                         console.log(data)
//                     }
//                 )
//             }
//         )
//     }
// )

fs.rename(
    path.join(__dirname, "notes", "mynotes.txt"),
    "notes.txt",
    err => {
        if (err) throw err

        console.log("Файл переименован")
    }
)