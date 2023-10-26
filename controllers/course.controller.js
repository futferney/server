const Course = require("../models/course.model")

//Funciones
async function createCourse(req, res) {
    const course = new Course(req.body)

    const imagePath = image.getFilePath(req.files.avatar)
    course.miniature = imagePath

    course.save((error, courseStored) => {
        if (error) {
            res.status(400).send({msg: "Error al crear el cursor"})
        } else {
            res.status(201).send(courseStored)
        }
    })
}

module.exports = {
    createCourse,
}