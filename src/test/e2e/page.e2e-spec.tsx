import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home Page", () => {
  describe("Rendering", () => {
    it("renders without crashing", () => {
      render(<Home />);
      expect(screen.getByTestId("home-page")).toBeInTheDocument();
    });

    it("has correct structure with main wrapper", () => {
      render(<Home />);
      const mainWrapper = screen.getByTestId("home-page");
      expect(mainWrapper).toHaveClass(
        "flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black",
      );
    });

    it("contains the main content section", () => {
      render(<Home />);
      const mainContent = screen.getByRole("main");
      expect(mainContent).toBeInTheDocument();
    });
  });

  describe("Next.js Logo", () => {
    it("renders the Next.js logo image", () => {
      render(<Home />);
      const logo = screen.getByAltText("Next.js logo");
      expect(logo).toBeInTheDocument();
    });

    it("has correct src for Next.js logo", () => {
      render(<Home />);
      const logo = screen.getByAltText("Next.js logo");
      expect(logo).toHaveAttribute("src", "/next.svg");
    });

    it("has correct dimensions for Next.js logo", () => {
      render(<Home />);
      const logo = screen.getByAltText("Next.js logo");
      expect(logo).toHaveAttribute("width", "100");
      expect(logo).toHaveAttribute("height", "20");
    });
  });

  describe("Heading and Text Content", () => {
    it("displays the main heading", () => {
      render(<Home />);
      const heading = screen.getByRole("heading", {
        name: /To get started, edit the page.tsx file/i,
      });
      expect(heading).toBeInTheDocument();
    });

    it("displays the paragraph with link to Vercel templates", () => {
      render(<Home />);
      const paragraph = screen.getByText(/Looking for a starting point/i);
      expect(paragraph).toBeInTheDocument();
    });

    it("contains link to Vercel templates", () => {
      render(<Home />);
      const templatesLink = screen.getByRole("link", { name: /Templates/i });
      expect(templatesLink).toBeInTheDocument();
      expect(templatesLink).toHaveAttribute(
        "href",
        "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
      );
    });

    it("contains link to Next.js Learning center", () => {
      render(<Home />);
      const learningLink = screen.getByRole("link", { name: /Learning/i });
      expect(learningLink).toBeInTheDocument();
      expect(learningLink).toHaveAttribute(
        "href",
        "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
      );
    });
  });

  describe("Action Links", () => {
    it("contains Deploy Now button with Vercel logo", () => {
      render(<Home />);
      const deployLink = screen.getByRole("link", { name: /Deploy Now/i });
      expect(deployLink).toBeInTheDocument();
      expect(deployLink).toHaveAttribute(
        "href",
        "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
      );
    });

    it("contains Vercel logo in Deploy Now button", () => {
      render(<Home />);
      const vercelLogo = screen.getByAltText("Vercel logomark");
      expect(vercelLogo).toBeInTheDocument();
      expect(vercelLogo).toHaveAttribute("src", "/vercel.svg");
      expect(vercelLogo).toHaveAttribute("width", "16");
      expect(vercelLogo).toHaveAttribute("height", "16");
    });

    it("contains Documentation link", () => {
      render(<Home />);
      const docsLink = screen.getByRole("link", { name: /Documentation/i });
      expect(docsLink).toBeInTheDocument();
      expect(docsLink).toHaveAttribute(
        "href",
        "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
      );
    });

    it("all external links open in new tab", () => {
      render(<Home />);
      const deployLink = screen.getByRole("link", { name: /Deploy Now/i });
      const docsLink = screen.getByRole("link", { name: /Documentation/i });

      expect(deployLink).toHaveAttribute("target", "_blank");
      expect(deployLink).toHaveAttribute("rel", "noopener noreferrer");

      expect(docsLink).toHaveAttribute("target", "_blank");
      expect(docsLink).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  describe("Styling and CSS Classes", () => {
    it("has correct dark mode classes on wrapper", () => {
      render(<Home />);
      const wrapper = screen.getByTestId("home-page");
      expect(wrapper).toHaveClass("dark:bg-black");
    });

    it("has correct responsive classes on main content", () => {
      render(<Home />);
      const main = screen.getByRole("main");
      expect(main).toHaveClass("bg-white");
      expect(main).toHaveClass("dark:bg-black");
      expect(main).toHaveClass("sm:items-start");
    });

    it("has correct text styling classes on heading", () => {
      render(<Home />);
      const heading = screen.getByRole("heading", {
        name: /To get started, edit the page.tsx file/i,
      });
      expect(heading).toHaveClass("text-3xl");
      expect(heading).toHaveClass("font-semibold");
      expect(heading).toHaveClass("text-black");
      expect(heading).toHaveClass("dark:text-zinc-50");
    });

    it("has correct styling on paragraph", () => {
      render(<Home />);
      const paragraph = screen.getByText(/Looking for a starting point/i);
      expect(paragraph).toHaveClass("text-lg");
      expect(paragraph).toHaveClass("text-zinc-600");
      expect(paragraph).toHaveClass("dark:text-zinc-400");
    });

    it("has correct styling on links", () => {
      render(<Home />);
      const link = screen.getByRole("link", { name: /Templates/i });
      expect(link).toHaveClass("font-medium");
      expect(link).toHaveClass("text-zinc-950");
      expect(link).toHaveClass("dark:text-zinc-50");
    });
  });

  describe("Accessibility", () => {
    it("all images have alt text", () => {
      render(<Home />);
      const images = screen.getAllByRole("img");
      images.forEach((img) => {
        expect(img).toHaveAttribute("alt");
      });
    });

    it("action links have proper rel attribute", () => {
      render(<Home />);
      const deployLink = screen.getByRole("link", { name: /Deploy Now/i });
      const docsLink = screen.getByRole("link", { name: /Documentation/i });

      expect(deployLink).toHaveAttribute("rel", "noopener noreferrer");
      expect(docsLink).toHaveAttribute("rel", "noopener noreferrer");
    });

    it("has correct number of interactive elements", () => {
      render(<Home />);
      const links = screen.getAllByRole("link");
      const images = screen.getAllByRole("img");
      expect(links.length).toBe(4);
      expect(images.length).toBe(2);
    });
  });
});
