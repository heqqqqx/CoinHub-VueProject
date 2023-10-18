<template>
  <div class="quiz-component">
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
    <button @click="submit">Submit</button>
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
          options: ["Binance", "Coinbase", "eBay", "Facebook"],
          answer: ["Binance", "Coinbase"],
          userAnswer: "",
        },
        {
          text: "What technology is commonly used to secure cryptocurrencies?",
          options: ["Blockchain", "HTTPS", "SSL", "Firewall"],
          answer: ["Blockchain"],
          userAnswer: "",
        },
        {
          text: "Which cryptocurrencies are mentioned in the guide?",
          options: ["Bitcoin", "Ethereum", "Litecoin", "Tezos"],
          answer: ["Bitcoin", "Ethereum", "Tezos"],
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
      return (
        this.submitted &&
        !this.questions[questionIndex].answer.includes(option) &&
        this.isSelected(questionIndex, option)
      );
    },
    isNotComplete(questionIndex, option) {
      const question = this.questions[questionIndex];
      const correctAnswersArray = question.answer;
      const selectedAnswersArray = question.userAnswer
        .split(",")
        .map((answer) => answer.trim());

      const isCorrect = correctAnswersArray.every((answer) =>
        selectedAnswersArray.includes(answer)
      );
      const isNotComplete = correctAnswersArray.some(
        (answer) => !selectedAnswersArray.includes(answer)
      );

      return (
        this.submitted &&
        !isCorrect &&
        isNotComplete &&
        selectedAnswersArray.includes(option)
      );
    },
  },
};
</script>
  
  <style scoped>
.quiz-component {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.question {
  margin-bottom: 20px;
}

.answer {
  display: inline-block;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 4px;
  margin: 5px;
  cursor: pointer;
  user-select: none;
}

.answer.selected {
  border-color: blue;
}

.answer.correct {
  border-color: green;
}

.answer.wrong {
  border-color: red;
}

.answer.partial {
  border-color: orange;
}
</style>
  