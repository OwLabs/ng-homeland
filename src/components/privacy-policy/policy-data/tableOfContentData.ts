interface TableOfContentProps {
  id: string;
  label: string;
}

export const tableOfContents: TableOfContentProps[] = [
  { id: "data-collected", label: "Personal Data We Collect" },
  { id: "purpose", label: "Purpose of Processing" },
  { id: "consent", label: "Consent" },
  { id: "disclosure", label: "Disclosure of Data" },
  { id: "security", label: "Data Security" },
  { id: "retention", label: "Data Retention" },
  { id: "rights", label: "Access & Correction Rights" },
  { id: "cross-border", label: "Cross-Border Transfer" },
  { id: "amendments", label: "Amendments" },
];
