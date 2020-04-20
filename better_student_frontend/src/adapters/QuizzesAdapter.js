class QuizzesAdapter {
    constructor(){
        this.baseUrl = 'http://localhost:3000/quizzes'
    }
    getQuizzes() {
        return fetch(this.baseUrl).then(res => res.json())
    }
    createQuiz(value, num){
        const quiz = {
            title: value,
            num_of_questions: num,
        }
        return fetch(this.baseUrl, {
             method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ quiz }),
        })
        .then(res => res.json())
    }
    updateQuiz(value, id){
        const quiz = {
            title: value,
           // num_of_questions: num,
            //id: id,
        }
        return fetch(`${this.baseUrl}/id`, {
             method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ quiz }),
        })
        .then(res => res.json())
    }
}