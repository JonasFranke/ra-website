import type React from "react";

interface MasonryProps {
  children: React.ReactNode;
}

export function Masonry(props: MasonryProps) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-2">
      {props.children}
    </div>
  );
}
