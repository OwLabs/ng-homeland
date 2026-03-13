import { render } from "@testing-library/react";
import PrivacyPolicy from "@/app/privacy-policy/page";

// Mock the PrivacyPolicyPage component
jest.mock("@/components/privacy-policy/PrivacyPolicyPage", () => ({
  PrivacyPolicyPage: function MockPrivacyPolicyPage() {
    return <div data-testid="privacy-policy-page">Privacy Policy Page Component</div>;
  },
}));


describe("Privacy Policy Page Unit Tests", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<PrivacyPolicy />);
    expect(getByTestId("privacy-policy-page")).toBeInTheDocument();
    expect(getByTestId("privacy-policy-page")).toHaveTextContent("Privacy Policy Page Component");
  });
});
