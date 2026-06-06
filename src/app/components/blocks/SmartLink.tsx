import { Link } from "react-router";
import type { ReactNode } from "react";

export function SmartLink({
  to,
  className,
  children,
  style,
  onClick,
}: {
  to?: string;
  className?: string;
  children: ReactNode;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
}) {
  if (!to) return <span className={className} style={style}>{children}</span>;
  const external = /^(https?:|mailto:|tel:)/.test(to);
  if (external) {
    return (
      <a href={to} className={className} style={style} onClick={onClick} target={to.startsWith("http") ? "_blank" : undefined} rel={to.startsWith("http") ? "noreferrer" : undefined}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={className} style={style} onClick={onClick}>
      {children}
    </Link>
  );
}
