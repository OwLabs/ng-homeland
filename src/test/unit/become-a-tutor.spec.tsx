import { render } from "@testing-library/react";
import BecomeTutor from "@/app/become-a-tutor/page";

// Mock the BecomeTutorPage component
jest.mock("@/components/become-a-tutor/BecomeTutorPage", () => ({
  BecomeTutorPage: function MockBecomeTutorPage() {
    return <div data-testid="become-tutor-page">Become a Tutor Page Component</div>;
  },
}));


describe("Become a Tutor Page Unit Tests", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<BecomeTutor />);
    expect(getByTestId("become-tutor-page")).toBeInTheDocument();
    expect(getByTestId("become-tutor-page")).toHaveTextContent("Become a Tutor Page Component");
  });
});
