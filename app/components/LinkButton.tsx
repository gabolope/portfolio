import { CSSProperties } from "react";
import Link from "next/link";
import { DoubleArrowRightIcon } from "@radix-ui/react-icons";
import styles from "./LinkButton.module.css";

interface LinkButtonProps {
  children: React.ReactNode;
  href: string;
  color?: string;
  openInNewTab?: boolean;
}

const LinkButton = ({
  children,
  href,
  color = "#212529",
  openInNewTab = false,
}: LinkButtonProps) => {
  return (
    <Link
      href={href}
      className={styles.slider}
      style={{ "--btn-color": color } as CSSProperties}
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
