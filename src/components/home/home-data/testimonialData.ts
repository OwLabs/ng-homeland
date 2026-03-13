interface TestimonialsData {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export const testimonials: TestimonialsData[] = [
  {
    name: "Nurul Aisyah",
    role: "Form 5 Student, SMK Taman Desa",
    text: "NeuralGuru helped me identify my weak KBAT areas in Add Maths. My score improved from C+ to A- in just two months!",
    rating: 5,
  },
  {
    name: "Ahmad Danial",
    role: "Form 4 Student, MRSM Taiping",
    text: "The adaptive practice questions feel like real SPM questions. The AI tutor explains things better than some textbooks!",
    rating: 5,
  },
  {
    name: "Cikgu Fatimah",
    role: "Physics Tutor, 8 years experience",
    text: "As a tutor, the AI insights save me hours of analysis. I can now focus on teaching instead of figuring out what students struggle with.",
    rating: 5,
  },
];
