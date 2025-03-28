import React, { forwardRef } from "react";
import { HashLink, HashLinkProps } from "react-router-hash-link";
import { Button } from "@relume_io/relume-ui";
import { ButtonProps } from "@relume_io/relume-ui";

interface HashLinkButtonProps
  extends Omit<HashLinkProps, "className" | "style"> {
  buttonProps?: ButtonProps;
  children: React.ReactNode;
  asChild?: boolean;
}

export const HashLinkButton = forwardRef<
  HTMLAnchorElement,
  HashLinkButtonProps
>(
  (
    { to, smooth = true, buttonProps = {}, children, asChild = false, ...rest },
    ref
  ) => {
    const linkClassName = "inline-block no-underline hash-link";

    if (asChild) {
      const child = React.Children.only(children) as React.ReactElement;

      return (
        <HashLink
          to={to}
          smooth={smooth}
          className={linkClassName}
          ref={ref}
          style={{ color: "white", textDecoration: "none" }}
          {...rest}
        >
          {React.cloneElement(child, {
            ...(child.props as object),
          })}
        </HashLink>
      );
    }

    return (
      <HashLink
        to={to}
        smooth={smooth}
        className="inline-block no-underline !text-white !hover:text-white"
        ref={ref}
        {...rest}
      >
        <Button {...buttonProps}>{children}</Button>
      </HashLink>
    );
  }
);

HashLinkButton.displayName = "HashLinkButton";
