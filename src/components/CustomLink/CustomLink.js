import React, { useMemo } from "react";
import { Link } from "react-router-dom";

const isAbsoluteUrl = (url) => {
  try {
    return new URL(url).protocol.startsWith("http");
  } catch {
    return false;
  }
};

const useHref = ({ link }) => {
  return useMemo(() => {
    if (!link) return "";
    return link.trim();
  }, [link]);
};

export const CustomLink = ({
  to,
  children,
  className = "",
  target,
  onClick,
  ...props
}) => {
  const processedHref = useHref({ link: to });

  if (!processedHref) {
    return <span className={className}>{children}</span>;
  }

  const isExternal = isAbsoluteUrl(processedHref);
  if (isExternal) {
    return (
      <a
        href={processedHref}
        className={className}
        target={target || "_blank"}
        rel="noopener noreferrer"
        onClick={onClick}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      to={processedHref}
      className={className}
      onClick={onClick}
      {...props}
    >
      {children}
    </Link>
  );
};
