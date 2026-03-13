import { render } from "@testing-library/react";
import TermsOfService from "@/app/terms-of-service/page";

// Mock the TermsOfServicePage component
jest.mock("@/components/terms-of-service/TermsOfServicePage", () => ({
  TermsOfServicePage: function MockTermsOfServicePage() {
    return <div data-testid="terms-of-service-page">Terms of Service Page Component</div>;
  },
}));


describe("Terms of Service Page Unit Tests", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<TermsOfService />);
    expect(getByTestId("terms-of-service-page")).toBeInTheDocument();
    expect(getByTestId("terms-of-service-page")).toHaveTextContent("Terms of Service Page Component");
  });
});
