import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

// Mock next/image to avoid issues with dynamic imports in tests
jest.mock("next/image", () => {
  return function MockImage({
    src,
    alt,
    width,
    height,
    priority,
  }: {
    src: string;
    alt: string;
    width: number;
    height: number;
    priority?: boolean;
  }) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        data-priority={priority}
      />
    );
  };
});

describe("Home Page Unit Tests", () => {
  describe("Component Rendering", () => {
    it("renders the page wrapper correctly", () => {
      const { container } = render(<Home />);
      const wrapper = container.firstChild;
      expect(wrapper).toBeInTheDocument();
      expect(wrapper).toHaveClass(
        "flex min-h-screen items-center justify-center",
      );
    });

    it("heading markup remains stable", () => {
      render(<Home />);
      expect(screen.getByRole("heading", { level: 1 })).toMatchSnapshot();
    });

    it("renders main content area", () => {
      render(<Home />);
      const main = screen.getByRole("main");
      expect(main).toBeInTheDocument();
    });
  });

  describe("Image Components", () => {
    it("renders Next.js logo with correct props", () => {
      render(<Home />);
      const nextLogo = screen.getByAltText("Next.js logo");
      expect(nextLogo).toHaveAttribute("src", "/next.svg");
      expect(nextLogo).toHaveAttribute("width", "100");
      expect(nextLogo).toHaveAttribute("height", "20");
    });

    it("renders Vercel logo with correct props", () => {
      render(<Home />);
      const vercelLogo = screen.getByAltText("Vercel logomark");
      expect(vercelLogo).toHaveAttribute("src", "/vercel.svg");
      expect(vercelLogo).toHaveAttribute("width", "16");
      expect(vercelLogo).toHaveAttribute("height", "16");
    });
  });

  describe("Text Content", () => {
    it("displays heading text", () => {
      render(<Home />);
      expect(
        screen.getByText("To get started, edit the page.tsx file."),
      ).toBeInTheDocument();
    });

    it("displays paragraph text", () => {
      render(<Home />);
      expect(
        screen.getByText(/Looking for a starting point/i),
      ).toBeInTheDocument();
    });
  });

  describe("Links Verification", () => {
    it("contains expected number of links", () => {
      render(<Home />);
      const links = screen.getAllByRole("link");
      expect(links.length).toBe(4);
    });

    it("contains Deploy Now link with correct href", () => {
      render(<Home />);
      const deployLink = screen.getByRole("link", { name: /Deploy Now/i });
      expect(deployLink.getAttribute("href")).toContain("vercel.com/new");
    });

    it("contains Documentation link with correct href", () => {
      render(<Home />);
      const docsLink = screen.getByRole("link", { name: /Documentation/i });
      expect(docsLink.getAttribute("href")).toContain("nextjs.org/docs");
    });
  });

  describe("CSS Classes Structure", () => {
    it("wrapper has correct flex classes", () => {
      render(<Home />);
      const wrapper = screen.getByTestId("home-page");
      expect(wrapper).toHaveClass("flex");
      expect(wrapper).toHaveClass("items-center");
      expect(wrapper).toHaveClass("justify-center");
    });

    it("wrapper has correct dark mode class", () => {
      render(<Home />);
      const wrapper = screen.getByTestId("home-page");
      expect(wrapper).toHaveClass("dark:bg-black");
    });
  });

  describe("Element Count", () => {
    it("renders exactly 2 images", () => {
      render(<Home />);
      const images = screen.getAllByRole("img");
      expect(images.length).toBe(2);
    });

    it("renders exactly 1 heading", () => {
      render(<Home />);
      const headings = screen.getAllByRole("heading");
      expect(headings.length).toBe(1);
    });
  });
});
