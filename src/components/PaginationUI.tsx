import * as React from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";
import clsx from "clsx";

const PaginationUI = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={clsx("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);
PaginationUI.displayName = "Pagination";

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={clsx("flex flex-row items-center gap-1", className)}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={clsx("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
} & React.ComponentProps<"a">;

const PaginationLink = ({
  className,
  isActive,
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={clsx({ "text-red-extra-light": isActive })}
    {...props}
  />
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Ir para a página anterior"
    className={clsx("gap-1 pl-2.5", className)}
    {...props}
  >
    <CaretLeft className="h-4 w-4" />
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Ir para a próxima página"
    className={clsx("gap-1 pr-2.5", className)}
    {...props}
  >
    <CaretRight className="h-4 w-4" />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={clsx("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    ...
    {/* <MoreHorizontal className="h-4 w-4" /> */}
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  PaginationUI,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
