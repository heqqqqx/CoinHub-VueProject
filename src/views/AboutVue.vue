<template>
  <GuideComponent
    headerTitle="About Us"
    headerDescription="Learn more about our platform and team."
    :sections="aboutSections"
  />
</template>
  
  <script>
import GuideComponent from "@/components/DisplayText.vue";

export default {
  components: {
    GuideComponent,
  },
  data() {
    return {
      aboutSections: [
        {
          title: "Our Mission",
          content:
            "Our mission is to provide clear and comprehensive information regarding the vast world of cryptocurrencies, that is always evolving. We aim to become a reliable portal where both novices and experts can find valuable insights, up-to-date news from all websites, and resources to improve their understanding and involvement in the cryptocurrency realm. Through fostering an informed community, we aim to contribute to a more transparent and accessible cryptocurrency ecosystem.",
        },
        {
          title: "Our Team",
          content:
            "Our team consists of two IT students with backgrounds in finance and technology. With a shared passion for the potential of blockchain technology and cryptocurrencies, we're dedicated to delivering high-quality content, analysis, and tools that empower our audience to navigate the crypto world with confidence.",
        },
        {
          title: "Our Values",
          content:
            "At the core of our operations are the values of integrity, transparency, and education. Our commitment to these values reflects in the trust and engagement we share with our readers.",
        },
        {
          title: "Community Engagement",
          content:
            "We highly encourage feedback from our community. You can send your questions, share your experiences to the following email : <a href='mailto:coinhub.vue@gmail.com'> coinhub.vue@gmail.com </a>,to help us improve and expand our product. We encourage active participation, feedback, and collaboration to help us grow and better serve our community.",
        },
        {
          title: "Educational Resources",
          content:
            "We are committed to providing educational resources that cater to individuals at every level of cryptocurrency understanding. With our Beginner's Guide, our goal is to provide a well-rounded educational platform that serves as a stepping stone for anyone looking to deepen their cryptocurrency knowledge and skills.",
        },
        {
          title: "Disclaimer",
          content:
            "<h3 class='disclaimer-h3'>Cryptocurrency investments are subject to market risks and potential financial losses. We strongly recommend individuals to conduct their own research and consult with qualified financial advisors before engaging in any investment activities. CoinHub does not endorse or recommend any particular cryptocurrency, and we disclaim any liability for any financial losses incurred as a result of using the information provided on our website. </h3>",
        },
      ],
    };
  },
};
</script>
  