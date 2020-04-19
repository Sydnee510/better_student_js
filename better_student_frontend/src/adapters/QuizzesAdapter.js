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
          //num_of_questions: JSON.stringify({ quiz }),
        })
        .then(res => res.json())
    }
}

// apdapter = new QuizzesAdapter()
// const quizzes = adapter.getQuizzes()