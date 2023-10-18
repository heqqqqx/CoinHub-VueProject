<template>
    <div class="quiz-component">
      <h2>Crypto Basics Quiz</h2>
      <form @submit.prevent="submitQuiz">
        <div v-for="(question, index) in questions" :key="index" class="question">
          <p>{{ question.text }}</p>
          <label v-for="(option, optionIndex) in question.options" :key="optionIndex">
            <input type="checkbox" :value="option" v-model="userAnswers[index]"> {{ option }}
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div v-if="submitted">
        <h3>Your Score: {{ score }} out of {{ questions.length }}</h3>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "QuizComponent",
    data() {
      return {
        submitted: false,
        userAnswers: [],
        questions: [
          {
            text: 'What is cryptocurrency?',
            options: ['Digital Money', 'Physical Money', 'A type of bank', 'A country'],
            answer: ['Digital Money']
          },
          {
            text: 'Which platforms simplify buying and selling cryptocurrencies?',
            options: ['Binance', 'Coinbase', 'eBay', 'Facebook'],
            answer: ['Binance', 'Coinbase']
          },
          {
            text: 'What technology is commonly used to secure cryptocurrencies?',
            options: ['Blockchain', 'HTTPS', 'SSL', 'Firewall'],
            answer: ['Blockchain']
          },
          {
            text: 'Which cryptocurrencies are mentioned in the guide?',
            options: ['Bitcoin', 'Ethereum', 'Litecoin', 'Tezos'],
            answer: ['Bitcoin', 'Ethereum', 'Tezos']
          }
        ],
        score: 0
      };
    },
    created() {
      // Initialize userAnswers with empty arrays
      this.userAnswers = this.questions.map(() => []);
    },
    methods: {
      submitQuiz() {
        this.submitted = true;
        this.score = this.userAnswers.filter((answer, index) => {
          return JSON.stringify(answer.sort()) === JSON.stringify(this.questions[index].answer.sort());
        }).length;
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  