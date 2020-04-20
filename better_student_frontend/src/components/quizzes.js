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
        this.quizzesContainer.addEventListener('dblclick', this.handleQuizClick.bind(this))
        this.quizzesContainer.addEventListener('blur', this.updateQuiz.bind(this), true)
    }
    createQuiz(e){
        e.preventDefault()
        const value = this.newQuizTitle.value;
        const num = this.newNumOfQuestions.value;
    
        this.adapter.createQuiz(value, num).then(quiz => {
            this.quizzes.push(new Quiz(quiz))
            this.newQuizTitle.value = ''
            this.newNumOfQuestions.value = ''
            this.render()
        })
    }
    handleQuizClick(e){
        const li = e.target
        li.contentEditable = true
        li.focus()
        li.classList.add('editable')
    }
    updateQuiz(e){
        const li = e.target
        li.contentEditable = false
        li.classList.remove('editable')
        const newValue = li.innerHTML
       // const newNum = li.innerHTML
        const id = li.dataset.id
        console.log(id)
        this.adapter.updateQuiz(newValue, id)
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
       this.quizzesContainer.innerHTML = this.quizzes.map(quiz => quiz.renderLi()).join('')
    }
}