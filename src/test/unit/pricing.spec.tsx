import { render } from "@testing-library/react";
import Pricing from "@/app/pricing/page";

// Mock the PricingPage component
jest.mock("@/components/pricing/PricingPage", () => ({
  PricingPage: function MockPricingPage() {
    return <div data-testid="pricing-page">Pricing Page Component</div>;
  },
}));


describe("Pricing Page Unit Tests", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<Pricing />);
    expect(getByTestId("pricing-page")).toBeInTheDocument();
    expect(getByTestId("pricing-page")).toHaveTextContent("Pricing Page Component");
  });
});
