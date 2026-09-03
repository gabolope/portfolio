import Link from "next/link";
import styles from "./CtaButton.module.css";

interface Props {
  children: React.ReactNode;
  href: string;
  variant?: "solid" | "accent" | "outline";
  openInNewTab?: boolean;
}

const CtaButton = ({
  children,
  href,
  variant = "outline",
  openInNewTab = false,
}: Props) => {
  return (
    <Link
      href={href}
      className={`${styles.slider} ${styles[variant]}`}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
    >
      {children}
    </Link>
  );
};

export default CtaButton;
