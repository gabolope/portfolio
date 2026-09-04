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
        <span>{title}</span>
      </div>
    </div>
  );
};

export default SectionHeading;
