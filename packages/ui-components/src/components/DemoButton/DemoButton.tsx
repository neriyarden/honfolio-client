import React from "react";

type Props = {
  children: React.ReactNode;
};

export function DemoButton({ children }: Props) {
  return <button type="submit">{children}</button>;
}
