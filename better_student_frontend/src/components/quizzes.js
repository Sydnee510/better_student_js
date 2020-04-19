class Quizzes {
    constructor() {
        this.quizzes = []
        this.adapter = new QuizzesAdapter()
        //this.bindEventListeners()
        this.fetchAndLoadQuizzes()
    }
    fetchAndLoadQuizzes(){
        this.adapter.getQuizzes().then(quizzes => {
            quizzes.forEach(quiz => this.quizzes.push(new Quiz(quiz)))
            console.log(this.quizzes)
        })
        .then(() => {
            this.render()
        })

    }
    render() {
        //const quizzesString = console.log(quizzesString)
        const quizzesContainer = document.getElementById('quizzes-container')
       quizzesContainer.innerHTML = this.quizzes.map(quiz => `<li>${quiz.title}, ${quiz.num_of_questions}</li>`).join('')
        //`${this.quizzes.map(quiz => <li>${quiz.title}</li>, <li>${quiz.num_of_questions}</li>)}`
        //quizzesContainer.innerHTML = "my quizzes here"
        //console.log('all quizzes', this.quizzes)
    }
}