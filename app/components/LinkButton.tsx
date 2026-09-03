import { DoubleArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import styles from "./LinkButton.module.css";

interface Props {
  children: React.ReactNode;
  href: string;
  variant?: "solid" | "accent" | "outline";
  openInNewTab?: boolean;
}

const LinkButton = ({
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
      <span className={styles.text}>{children}</span>
      <span className={styles.iconWrapper}>
        <DoubleArrowRightIcon />
      </span>
    </Link>
  );
};

export default LinkButton;
