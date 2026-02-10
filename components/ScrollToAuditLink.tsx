"use client";

const AUDIT_SECTION_ID = "audit";

export interface ScrollToAuditLinkProps {
  className?: string;
  children: React.ReactNode;
}

/**
 * Link that scrolls to the audit section on every click.
 * Uses scrollIntoView so it works even when the URL already has #audit.
 */
export function ScrollToAuditLink({ className, children }: ScrollToAuditLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById(AUDIT_SECTION_ID)?.scrollIntoView({
      behavior: "smooth",
    });
    window.history.replaceState(null, "", `#${AUDIT_SECTION_ID}`);
  };

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
