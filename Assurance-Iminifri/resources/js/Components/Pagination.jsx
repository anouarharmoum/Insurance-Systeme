import { Link } from "@inertiajs/react";

export default function Pagination({ links }) {
  return (
    <nav className="text-center mt-4">
      {links.map((link) => (
        <Link
          preserveScroll
          href={link.url || ""}
          key={link.label}
          className={
            "inline-block py-2 px-3 rounded-lg " +
            (link.active
              ? "text-gray-200 bg-gray-950 "
              : "text-customBlue font-bold ") +
            "text-xs " +
            (!link.url
              ? "!text-customBlue  cursor-not-allowed "
              : "hover:bg-gray-950 hover:text-gray-200")
          }
          dangerouslySetInnerHTML={{ __html: link.label }}
        ></Link>
      ))}
    </nav>
  );
}