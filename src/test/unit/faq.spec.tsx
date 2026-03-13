import { render } from "@testing-library/react";
import FAQ from "@/app/faq/page";

// Mock the FaqPage component
jest.mock("@/components/faq/FaqPage", () => ({
  FaqPage: function MockFaqPage() {
    return <div data-testid="faq-page">FAQ Page Component</div>;
  },
}));


describe("FAQ Page Unit Tests", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<FAQ />);
    expect(getByTestId("faq-page")).toBeInTheDocument();
    expect(getByTestId("faq-page")).toHaveTextContent("FAQ Page Component");
  });
});
