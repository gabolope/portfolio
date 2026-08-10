import { CSSProperties } from "react";
import Link from "next/link";
import { DoubleArrowRightIcon } from "@radix-ui/react-icons";
import styles from "./SocialButton.module.css";

interface Props {
  children: React.ReactNode;
  href: string;
  color?: string;
  openInNewTab?: boolean;
}

const SocialButton = ({
  children,
  href,
  color = "#212529",
  openInNewTab = false,
}: Props) => {
  return (
    <Link
      href={href}
      className={styles.slider}
      style={{ "--btn-color": color } as CSSProperties}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
    >
      <span className={styles.content}>{children}</span>
    </Link>
  );
};

export default SocialButton;
