<template>
  <div class="quiz-component">
    <h1 class="h1-guide">Are you ready for the quizz ?</h1>
    <div v-for="(question, index) in questions" :key="index" class="question">
      <p>{{ question.text }}</p>
      <div
        v-for="(option, optionIndex) in question.options"
        :key="optionIndex"
        class="answer"
        :class="{
          selected: isSelected(index, option),
          correct: isCorrect(index, option),
          wrong: isWrong(index, option),
          partial: isNotComplete(index, option),
        }"
        @click="toggleSelection(index, option)"
      >
        {{ option }}
      </div>
    </div>
    <button @click="submit" class="quizz-button">Submit</button>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      questions: [
        {
          text: "What is cryptocurrency?",
          options: [
            "Digital Money",
            "Physical Money",
            "A type of bank",
            "A country",
          ],
          answer: ["Digital Money"],
          userAnswer: "",
        },
        {
          text: "Which platforms simplify buying and selling cryptocurrencies?",
          options: ["Binance", "Coinbase", "eBay", "BeReal."],
          answer: ["Binance", "Coinbase"],
          userAnswer: "",
        },
        {
          text: "What technology is commonly used to secure cryptocurrencies?",
          options: ["Blockchain", "HTTPS", "SSL", "ASSR2"],
          answer: ["Blockchain"],
          userAnswer: "",
        },
        {
          text: "What is the best way to invest ?",
          options: [
            "All-in",
            "Diversify your wallet",
            "Shitcoins only",
            "Follow the news and invest in the most promising ones",
          ],
          answer: [
            "Diversify your wallet",
            "Follow the news and invest in the most promising ones",
          ],
          userAnswer: "",
        },
      ],
      submitted: false,
    };
  },
  methods: {
    toggleSelection(questionIndex, option) {
      const question = this.questions[questionIndex];
      question.userAnswer = question.userAnswer.includes(option)
        ? question.userAnswer.replace(option, "").trim()
        : question.userAnswer + ", " + option;
    },
    submit() {
      this.submitted = true;
    },
    isSelected(questionIndex, option) {
      return this.questions[questionIndex].userAnswer.includes(option);
    },
    isCorrect(questionIndex, option) {
      return (
        this.submitted &&
        this.questions[questionIndex].answer.includes(option) &&
        this.isSelected(questionIndex, option)
      );
    },
    isWrong(questionIndex, option) {
    return this.submitted && !this.questions[questionIndex].answer.includes(option) && this.isSelected(questionIndex, option) ;
  },
  isNotComplete(questionIndex, option) {
    const question = this.questions[questionIndex];
    const correctAnswers = question.answer;
    const selectedAnswers = question.userAnswer.split(',').map(answer => answer.trim());
    const isCorrect = correctAnswers.every(answer => selectedAnswers.includes(answer));

    return this.submitted && !isCorrect && selectedAnswers.includes(option);
  }
  },
};
</script>
