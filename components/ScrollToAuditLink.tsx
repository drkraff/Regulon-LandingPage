"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const AUDIT_SECTION_ID = "audit";

export const AUDIT_SECTION_HREF = `/#${AUDIT_SECTION_ID}`;

export interface ScrollToAuditLinkProps {
  className?: string;
  children: React.ReactNode;
}

/**
 * Link that scrolls to the audit section on the home page.
 * On the home page: smooth-scrolls to #audit and updates the URL.
 * On other pages: navigates to /#audit so the landing page opens at the audit section.
 */
export function ScrollToAuditLink({ className, children }: ScrollToAuditLinkProps) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isHomePage) {
      return;
    }
    e.preventDefault();
    document.getElementById(AUDIT_SECTION_ID)?.scrollIntoView({
      behavior: "smooth",
    });
    window.history.replaceState(null, "", `#${AUDIT_SECTION_ID}`);
  };

  if (isHomePage) {
    return (
      <a
        href={`#${AUDIT_SECTION_ID}`}
        onClick={handleClick}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={AUDIT_SECTION_HREF} className={className}>
      {children}
    </Link>
  );
}
