const INDEX_ANSWERS = ["a","b","c","d"]

class GameSolo{

    constructor(){
        this.answers = []
        this.questions = []
    }

    addAnswer(ans){
        this.answers.push(ans)
    }

    addQuestion(quest){
        this.questions.push(quest)
    }


results(answers, questions){

        var right = 0,
            wrong = 0;
            
            this.answers.forEach( question => {
                this.questions.forEach( questionRes => {
                    //console.log(`[socket] question.question: ${question.question}, questionRes._id: ${questionRes._id}`)
                    if(question.question == questionRes._id){
                       // console.log(`[socket] question.answer: ${question.answer}, INDEX_ANSWERS[questionRes.rightAnswer -1] : ${INDEX_ANSWERS[questionRes.rightAnswer - 1]}`)
                        if(question.answer == INDEX_ANSWERS[questionRes.rightAnswer - 1]){
                            right = right+1 
                        }
                        else{
                            wrong = wrong+1
                        }
                    }
                })
            })

            return {right, wrong}
    }
}

module.exports = GameSolo;