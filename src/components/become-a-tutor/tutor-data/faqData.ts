interface FaqProps {
  question: string;
  answer: string;
}

export const faqs: FaqProps[] = [
  {
    question: "Why must I register under an organisation?",
    answer:
      "Registering under an organisation ensures accountability, quality assurance, and regulatory compliance within the Malaysian education ecosystem. It also provides tutors with administrative support, platform access, and a structured framework for student management.",
  },
  {
    question: "What if I'm a freelancer and don't belong to any organisation?",
    answer:
      "No worries! Freelancers can register under one of our NeuralGuru partner organisations or set up as a sole-proprietor entity. This keeps the process simple while maintaining platform standards.",
  },
  {
    question: "How is the profit-share calculated for freelancers?",
    answer:
      "The profit-share percentage is negotiated directly between you and your registered organisation. Typically it ranges from 5–15% of your earnings, covering platform fees, admin support, and organisation overhead. The exact terms are agreed upon before you start.",
  },
  {
    question: "Do staff tutors need to pay any fees?",
    answer:
      "No. Staff tutors are fully covered by their organisation's subscription plan. Your organisation pays the NeuralGuru platform fees, so there's zero cost to you personally.",
  },
  {
    question: "Can I switch from Freelancer to Staff or vice versa?",
    answer:
      "Yes, you can request a path change through your organisation or by registering under a new organisation. The transition is handled by admin and typically takes 3–5 business days.",
  },
];
