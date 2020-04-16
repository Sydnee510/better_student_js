class Quizzes {
    constructor() {
        this.quizzes = []
        this.adapter = new QuizzesAdapter()
        //this.bindEventListeners()
        this.fetchAndLoadQuizzes()
    }
    fetchAndLoadQuizzes(){
        this.adapter.getQuizzes().then(quizzes => {
            quizzes.forEach(quiz => this.quizzes.push(quiz))
        //return console.log(quizzes)
        })
        .then(() => {
            this.render()
        })

    }
    render() {
        const quizzesContainer = document.getElementById('quizzes-container')
        quizzesContainer.innerHTML = "my quizzes here"
        console.log('all quizzes', this.quizzes)
    }
}