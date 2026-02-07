import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home Page E2E Tests", () => {
  describe("Page Rendering", () => {
    it("renders without crashing", () => {
      const { container } = render(<Home />);
      expect(container.firstChild).toBeInTheDocument();
    });

    it("has correct basic structure", () => {
      const { container } = render(<Home />);
      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper.tagName).toBe("DIV");
    });
  });

  describe("SectionA Component Content", () => {
    it("displays the main tagline", () => {
      render(<Home />);
      expect(
        screen.getByText(
          /Learn Smarter with NeuralGuru — Malaysia's First AI-Powered KBAT Predictor/i,
        ),
      ).toBeInTheDocument();
    });

    it("displays the description text", () => {
      render(<Home />);
      expect(
        screen.getByText(
          /Understand your weaknesses. Practice smarter questions. Learn with AI that thinks like your examiner./i,
        ),
      ).toBeInTheDocument();
    });
  });

  describe("Interactive Buttons", () => {
    it("renders Start Free Trial button", () => {
      render(<Home />);
      const startButton = screen.getByRole("button", {
        name: /Start Free Trial \(Student\)/i,
      });
      expect(startButton).toBeInTheDocument();
    });

    it("renders Tutor Login button", () => {
      render(<Home />);
      const tutorButton = screen.getByRole("button", {
        name: /Tutor Login/i,
      });
      expect(tutorButton).toBeInTheDocument();
      expect(tutorButton).toHaveClass("border-gray-800");
    });

    it("Start Free Trial button has correct styling", () => {
      render(<Home />);
      const startButton = screen.getByRole("button", {
        name: /Start Free Trial \(Student\)/i,
      });
      expect(startButton).toHaveClass("text-white");
    });

    it("Tutor Login button has outline variant", () => {
      render(<Home />);
      const tutorButton = screen.getByRole("button", {
        name: /Tutor Login/i,
      });
      expect(tutorButton).toHaveClass("border");
    });
  });

  describe("Links Verification", () => {
    it("contains Admin Access link", () => {
      render(<Home />);
      const adminLink = screen.getByRole("link", { name: /Admin Access/i });
      expect(adminLink).toBeInTheDocument();
      expect(adminLink).toHaveAttribute("href", "#");
    });

    it("Admin Access link has correct styling", () => {
      render(<Home />);
      const adminLink = screen.getByRole("link", { name: /Admin Access/i });
      expect(adminLink).toHaveClass("inline-flex", "items-center", "gap-2");
    });
  });

  describe("Feature Highlights", () => {
    it("displays 'No Credit Card Required' feature", () => {
      render(<Home />);
      expect(screen.getByText("No Credit Card Required")).toBeInTheDocument();
    });

    it("displays '14 Day Free Trial' feature", () => {
      render(<Home />);
      expect(screen.getByText("14 Day Free Trial")).toBeInTheDocument();
    });

    it("renders check circle icons for features", () => {
      render(<Home />);
      const { container } = render(<Home />);
      // Check that the lucide-react icons are rendered
      const checkIcons = container.querySelectorAll('svg[class*="lucide"]');
      expect(checkIcons.length).toBeGreaterThan(0);
    });
  });

  describe("Visual Elements", () => {
    it("renders the hero icons at the top", () => {
      render(<Home />);
      const { container } = render(<Home />);
      // Two ImageUpIcon components should be rendered
      const icons = container.querySelectorAll("svg.h-8.w-8");
      expect(icons.length).toBeGreaterThanOrEqual(2);
    });

    it("renders the aspect ratio container for media", () => {
      render(<Home />);
      const { container } = render(<Home />);
      const aspectRatioDiv = container.querySelector(
        ".rounded-3xl.bg-black\\/90",
      );
      expect(aspectRatioDiv).toBeInTheDocument();
    });
  });

  describe("Responsive Layout", () => {
    it("has grid layout with responsive classes", () => {
      render(<Home />);
      const { container } = render(<Home />);
      const gridContainer = container.querySelector(
        ".grid.grid-cols-1.md\\:grid-cols-2",
      );
      expect(gridContainer).toBeInTheDocument();
    });

    it("buttons have responsive width classes", () => {
      render(<Home />);
      const startButton = screen.getByRole("button", {
        name: /Start Free Trial \(Student\)/i,
      });
      const tutorButton = screen.getByRole("button", {
        name: /Tutor Login/i,
      });

      expect(startButton).toHaveClass("sm:w-auto", "w-full");
      expect(tutorButton).toHaveClass("sm:w-auto", "w-full");
    });
  });

  describe("Content Structure", () => {
    it("has section with background styling", () => {
      render(<Home />);
      const { container } = render(<Home />);
      const section = container.querySelector("section.bg-gray-100");
      expect(section).toBeInTheDocument();
    });

    it("has max-width container for content", () => {
      render(<Home />);
      const { container } = render(<Home />);
      const maxWidthContainer = container.querySelector(".max-w-7xl");
      expect(maxWidthContainer).toBeInTheDocument();
    });

    it("has proper spacing classes", () => {
      render(<Home />);
      const { container } = render(<Home />);
      const spacedDiv = container.querySelector(".space-y-6");
      expect(spacedDiv).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("all buttons are accessible", () => {
      render(<Home />);
      const buttons = screen.getAllByRole("button");
      expect(buttons.length).toBe(2);
      buttons.forEach((button) => {
        expect(button).toBeVisible();
      });
    });

    it("links have proper text content", () => {
      render(<Home />);
      const adminLink = screen.getByRole("link", { name: /Admin Access/i });
      const linkText = adminLink.querySelector("p");
      expect(linkText).toHaveTextContent("Admin Access");
    });

    it("feature list items are readable", () => {
      render(<Home />);
      expect(screen.getByText("No Credit Card Required")).toBeVisible();
      expect(screen.getByText("14 Day Free Trial")).toBeVisible();
    });
  });
});
