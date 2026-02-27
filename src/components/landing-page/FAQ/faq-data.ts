import {
    FileText,
    GraduationCap,
    HelpCircle,
    CreditCard,
    Settings,
    Users,
    type LucideIcon,
}  from "lucide-react"

//type
export interface FAQCategory {
    id: string
    name: string
    icon: LucideIcon
}

export interface FAQItem {
    id: string
    category: string
    question: string
    answer: string
}

//static data FAQCategory
export const categories: FAQCategory [] = [
    {id: "all", name: "All Questions", icon: HelpCircle },
    {id: "general", name: "General", icon: FileText },
    {id: "students", name: "For Students", icon: GraduationCap },
    {id: "tutors", name: "For Tutors", icon: Users },
    {id: "billing", name: "Billing & Plans", icon: CreditCard },
    {id: "technical", name: "Technical Support", icon: Settings },
]

//static data FAQItems
export const faqs: FAQItem [] = [
    {
        id: "gen-1",
        category: "general",
        question: "What is NeuralGuru?",
        answer: "NeuralGuru is Malaysia's first AI-powered Virtual Learning Environment designed to help students prepare for MOE-format exams. It uses artificial intelligence to detect learning patterns, predict KBAT (Higher Order Thinking Skills) weaknesses, and generate adaptive practice questions.",
    },

    {
        id: "gen-2",
        category: "general",
        question: "Is NeuralGuru suitable for all form levels?",
        answer: "Currently, NeuralGuru is optimized for Form 4 and Form 5 students preparing for SPM. We are actively working on expanding our content to include Form 1-3 (PT3) and primary school levels in the near future.",
    },

    {
        id: "stu-1",
        category: "students",
        question: "How does the AI KBAT prediction work?",
        answer: "Our AI analyzes your performance on practice tests and uploaded exam results. It looks for patterns in how you answer different types of questions. Based on this data, it predicts which KBAT concepts you might struggle with and provides targeted practice questions to strengthen those specific areas.",
    },

    {
        id: "stu-2",
        category: "students",
        question: "Can I use NeuralGuru on my phone?",
        answer: "Yes! NeuralGuru is fully responsive and works great on desktops, tablets, and mobile phones. You can practice questions, view reports, and chat with the AI assistant from any device.",
    },

    {
        id: "stu-3",
        category: "students",
        question: "Does the system mark my essays?",
        answer: "For objective and short-structured questions, marking is instant. For essay questions, our AI provides immediate feedback and suggested grading based on keywords and structure. For detailed human grading, you can book a session with one of our expert tutors.",
    },

    {
        id: "tut-1",
        category: "tutors",
        question: "How do I become a tutor on NeuralGuru?",
        answer: 'To become a tutor, click on "Tutor Login" and select "Register". You will need to upload your teaching credentials and pass our verification process. Once approved, you can start accepting students and managing your classes through the platform.',
    },

    {
        id: "tut-2",
        category: "tutors",
        question: "What is the commission rate for tutors?",
        answer: "NeuralGuru takes a competitive service fee of 15% on booked sessions to cover platform maintenance, AI features, and payment processing. Tutors keep 85% of their earnings, which are paid out weekly.",
    },

    {
        id: "bill-1",
        category: "billing",
        question: "Can I cancel my subscription at any time?",
        answer: "Yes, you can cancel your subscription at any time from your account settings. Your access to premium features will continue until the end of your current billing cycle.",
    },

    {
        id: "bill-2",
        category: "billing",
        question: "Do you offer a free trial?",
        answer: "Yes, we offer a 14-day free trial for the Premium plan. You can also start with our Free Forever plan which gives you limited access to practice questions and materials.",
    },

    {
        id: "tech-1",
        category: "technical",
        question: "I forgot my password. How can i reset it?",
        answer: 'Click on "Forgot Password" on the login screen. Enter your registered email address, and we will send you a link to reset your password.',
    },

    {
        id: "tech-2",
        category: "technical",
        question: "The AI chat isn't responding. What should I do?",
        answer: 'First, check your internet connection. If the problem persists, try refreshing the page. If it still does not work, please contact our support team via the "Help Center" or email support@neuralguru.my.',
    },
]