import { render } from "@testing-library/react";
import Home from "@/app/page";

// Mock the LandingPage component
jest.mock("@/components/home/LandingPage", () => ({
  LandingPage: function MockLandingPage() {
    return <div data-testid="landing-page">Landing Page Component</div>;
  },
}));



describe("Home Page Unit Tests", () => {
  describe("Component Rendering", () => {
    it("renders the page wrapper correctly", () => {
      const { container } = render(<Home />);
      const wrapper = container.firstChild;
      expect(wrapper).toBeInTheDocument();
      expect(wrapper).toBeInstanceOf(HTMLDivElement);
    });

    it("renders LandingPage component", () => {
      const { getByTestId } = render(<Home />);
      const landingPage = getByTestId("landing-page");
      expect(landingPage).toBeInTheDocument();
      expect(landingPage).toHaveTextContent("Landing Page Component");
    });

    it("has correct structure", () => {
      const { container } = render(<Home />);
      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper.tagName).toBe("DIV");
    });
  });

  describe("Component Integration", () => {
    it("mounts without errors", () => {
      expect(() => render(<Home />)).not.toThrow();
    });

    it("contains LandingPage as child component", () => {
      const { container } = render(<Home />);
      const landingPage = container.querySelector('[data-testid="landing-page"]');
      expect(landingPage).toBeInTheDocument();
    });

  });


});

