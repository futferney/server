const express = require("express")
const multiparty = require("connect-multiparty")
const CourseController = require("../controllers/course.controller")
const md_auth = require("../middlewares/authenticated")
const md_upload = multiparty({ uploadDir: "./uploads/course"})

const api = express.Router()

//APIs ...
api.post("/course", [md_auth.asureAuth, md_upload], CourseController.createCourse)

module.exports = api