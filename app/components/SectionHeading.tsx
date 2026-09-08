import { Heading } from "@radix-ui/themes";

interface Props {
  index: string;
  label: string;
  title: string;
}

const SectionHeading = ({ index, title }: Props) => {
  return (
    <div className="mb-10">
      <div className="section-label">
        <span className="idx">{index}</span>
        <Heading as="h2" style={{ all: "unset" }}>
          {title}
        </Heading>
      </div>
    </div>
  );
};

export default SectionHeading;
