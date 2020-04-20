class Quiz {
    constructor(quizJSON){
        this.id = quizJSON.id
        this.title = quizJSON.title
        this.num_of_questions = quizJSON.num_of_questions
    }
    renderLi(){
        return `<li data-id=${this.id}>${this.title}, ${this.num_of_questions}</li>`
    }
}