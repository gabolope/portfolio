import Link from "next/link";
import styles from "./CtaButton.module.css";

interface Props {
  children: React.ReactNode;
  href: string;
  variant?: "solid" | "accent" | "outline";
  openInNewTab?: boolean;
  className?: string;
}

const CtaButton = ({
  children,
  href,
  variant = "outline",
  openInNewTab = false,
  className,
}: Props) => {
  return (
    <Link
      href={href}
      className={`${styles.slider} ${styles[variant]} ${className ?? ""}`}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
    >
      {children}
    </Link>
  );
};

export default CtaButton;
