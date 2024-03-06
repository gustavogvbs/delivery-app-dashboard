import Link from "next/link";
import { usePathname } from "next/navigation";

export const CloseModal = () => {
  const pathname = usePathname();

  return (
    <Link className="cursor-default" href={pathname}>
      <div
        data-state="open"
        className="fixed inset-0 z-40 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
        data-aria-hidden="true"
        aria-hidden="true"
        style={{ pointerEvents: "auto" }}
      />
    </Link>
  );
};
