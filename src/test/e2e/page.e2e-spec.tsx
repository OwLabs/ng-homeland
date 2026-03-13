import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import BecomeTutor from "@/app/become-a-tutor/page";
import FAQ from "@/app/faq/page";
import Pricing from "@/app/pricing/page";
import PrivacyPolicy from "@/app/privacy-policy/page";
import TermsOfService from "@/app/terms-of-service/page";

// Mock useRouter for LandingPage
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

// Mock motion from motion/react to avoid "whileInView" props on DOM elements
jest.mock("motion/react", () => {
  const mockMotion = (Component: string) => {
    return ({ children, whileInView, initial, animate, transition, viewport, ...props }: any) => {
      const Tag = Component as any;
      return <Tag {...props}>{children}</Tag>;
    };
  };

  return {
    motion: {
      div: mockMotion("div"),
      h1: mockMotion("h1"),
      p: mockMotion("p"),
      section: mockMotion("section"),
      aside: mockMotion("aside"),
      span: mockMotion("span"),
    },
  };
});

// Mock components that might use heavy libraries or have complex rendering
jest.mock("@/components/NeuralNetworkBackground", () => ({
  NeuralNetworkBg: () => <div data-testid="neural-bg" />,
}));
jest.mock("@/components/fallback-image/ImageWithFallback", () => ({
  ImageWithFallback: (props: any) => <img {...props} alt={props.alt || ""} />,
}));

// Fix named export mocks for complex pages
jest.mock("@/components/privacy-policy/PrivacyPolicyPage", () => ({
  PrivacyPolicyPage: () => <div data-testid="privacy-policy-page">Privacy Policy Page</div>,
}));
jest.mock("@/components/terms-of-service/TermsOfServicePage", () => ({
  TermsOfServicePage: () => <div data-testid="terms-of-service-page">Terms of Service Page</div>,
}));

describe("Application E2E-Style Tests", () => {
  describe("Landing Page (Home)", () => {
    it("renders without crashing", () => {
      const { container } = render(<Home />);
      expect(container.firstChild).toBeInTheDocument();
    });

    it("displays the main tagline and badge", () => {
      render(<Home />);
      // Tagline is split across multiple elements inside h1
      expect(screen.getByRole("heading", { name: /Learn Smarter\. Score Higher\./i })).toBeInTheDocument();
      expect(screen.getByText(/Malaysia's First AI-Powered KBAT Predictor/i)).toBeInTheDocument();
    });

    it("displays the description text", () => {
      render(<Home />);
      expect(
        screen.getByText(
          /AI that thinks like your examiner — predicts your weaknesses, adapts to your pace, and guides you to exam success./i,
        ),
      ).toBeInTheDocument();
    });

    it("renders the primary CTA buttons", () => {
      render(<Home />);
      // There are multiple buttons with this text, we just need to verify at least one is there
      expect(screen.getAllByRole("button", { name: /Get Started Free/i })[0]).toBeInTheDocument();
      expect(screen.getByRole("button", { name: /View Pricing/i })).toBeInTheDocument();
    });

    it("displays feature highlights", () => {
      render(<Home />);
      // There are multiple occurrences of these texts
      expect(screen.getAllByText(/No credit card required/i)[0]).toBeInTheDocument();
      expect(screen.getAllByText(/14-day free trial/i)[0]).toBeInTheDocument();
      expect(screen.getAllByText(/MOE-aligned content/i)[0]).toBeInTheDocument();
    });
  });

  describe("Other Pages Rendering", () => {
    it("renders Become a Tutor page", () => {
      const { container } = render(<BecomeTutor />);
      expect(container).toBeInTheDocument();
    });

    it("renders FAQ page", () => {
      const { container } = render(<FAQ />);
      expect(container).toBeInTheDocument();
    });

    it("renders Pricing page", () => {
      const { container } = render(<Pricing />);
      expect(container).toBeInTheDocument();
    });

    it("renders Privacy Policy page", () => {
      const { getByTestId } = render(<PrivacyPolicy />);
      expect(getByTestId("privacy-policy-page")).toBeInTheDocument();
    });

    it("renders Terms of Service page", () => {
      const { getByTestId } = render(<TermsOfService />);
      expect(getByTestId("terms-of-service-page")).toBeInTheDocument();
    });
  });
});


