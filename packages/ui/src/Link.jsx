import * as React from "react";

export function Link(props) {
  const { children, href, ...rest } = props;

  if (rest.target === "_blank") {
    rest.rel = "noopener noreferrer";
  }

  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
}
