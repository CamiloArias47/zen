const {Router} = require('express')
const router = Router()

const {getQuestions,update,getQuestion,deleteQuestion} = require('../controllers/questions.controller')

router.route('/')
    .get(getQuestions)

router.route('/:id')
    .get(getQuestion)
    .put(update)
    .delete(deleteQuestion)
    


module.exports = router;