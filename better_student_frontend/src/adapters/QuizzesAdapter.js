class QuizzesAdapter {
    constructor(){
        this.baseUrl = 'http://localhost:3000/quizzes'
    }
    getQuizzes(){
        return fetch(this.baseUrl).then(res => res.json())
    }
}

// apdapter = new QuizzesAdapter()
// const quizzes = adapter.getQuizzes()