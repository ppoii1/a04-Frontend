import Link from "next/link";

interface TopMenuItemProps {
  label: string;
  href: string;
}

export default function TopMenuItem({ label, href }: TopMenuItemProps) {
  return (
    <Link href={href} className="text-gray-800 hover:text-blue-500 font-semibold px-4 py-2">
      {label}
    </Link>
  );
}