import { Heading } from "@radix-ui/themes";

interface Props {
  index: string;
  label: string;
  title: string;
}

const SectionHeading = ({ index, label, title }: Props) => {
  return (
    <div className="mb-10">
      <div className="section-label">
        <span className="idx">{index}</span>
        <span>{label}</span>
      </div>
      <Heading
        size={{ initial: "8", sm: "9" }}
        style={{ fontWeight: 600, letterSpacing: "-0.01em" }}
      >
        {title}
      </Heading>
    </div>
  );
};

export default SectionHeading;
