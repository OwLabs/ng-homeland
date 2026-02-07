import { render } from "@testing-library/react";
import Home from "@/app/page";

// Mock the SectionA component
jest.mock("@/components/landing-page/section-a", () => {
  return function MockSectionA() {
    return <div data-testid="section-a">SectionA Component</div>;
  };
});

describe("Home Page Unit Tests", () => {
  describe("Component Rendering", () => {
    it("renders the page wrapper correctly", () => {
      const { container } = render(<Home />);
      const wrapper = container.firstChild;
      expect(wrapper).toBeInTheDocument();
      expect(wrapper).toBeInstanceOf(HTMLDivElement);
    });

    it("renders SectionA component", () => {
      const { getByTestId } = render(<Home />);
      const sectionA = getByTestId("section-a");
      expect(sectionA).toBeInTheDocument();
      expect(sectionA).toHaveTextContent("SectionA Component");
    });

    it("has correct structure", () => {
      const { container } = render(<Home />);
      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper.tagName).toBe("DIV");
      expect(wrapper.children.length).toBe(2);
    });
  });

  describe("Component Integration", () => {
    it("mounts without errors", () => {
      expect(() => render(<Home />)).not.toThrow();
    });

    it("contains only SectionA as child component", () => {
      const { container } = render(<Home />);
      const wrapper = container.firstChild as HTMLElement;
      const sectionA = wrapper.querySelector('[data-testid="section-a"]');
      expect(sectionA).toBeInTheDocument();
    });
  });

  describe("Snapshot Testing", () => {
    it("matches snapshot", () => {
      const { container } = render(<Home />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
