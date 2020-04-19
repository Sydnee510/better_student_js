class Quizzes {
    constructor() {
        this.quizzes = []
        this.adapter = new QuizzesAdapter()
        this.initiBindingsAndEventListeners()
        this.fetchAndLoadQuizzes()
    }
    initiBindingsAndEventListeners(){
        this.quizzesContainer = document.getElementById('quizzes-container')
        this.newQuizTitle = document.getElementById('new-quiz-title')
        this.newNumOfQuestions = document.getElementById('new-num-of-questions')
        this.quizForm = document.getElementById('new-quiz-form')
        this.quizForm.addEventListener('submit', this.createQuiz.bind(this))

    }
    
    createQuiz(e){
       // console.log(this)
        e.preventDefault()
        const value = this.newQuizTitle.value;
        const num = this.newNumOfQuestions.value;
      //  const num =   this.newNumOfQuestions.num,

        this.adapter.createQuiz(value, num).then(quiz => {
            this.quizzes.push(new Quiz(quiz))
            this.render()
           //console.log(quiz)
        })
            //, num)
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
       // const quizzesContainer = document.getElementById('quizzes-container')
       this.quizzesContainer.innerHTML = this.quizzes.map(quiz => quiz.renderLi()).join('')
        //`${this.quizzes.map(quiz => <li>${quiz.title}</li>, <li>${quiz.num_of_questions}</li>)}`
        //quizzesContainer.innerHTML = "my quizzes here"
        //console.log('all quizzes', this.quizzes)
    }
}