import User from "./User";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return (
    <header className="flex justify-between p-5 text-sm text-gray-700flex space-x-4">
      <div className="flex space-x-4 items-center">
        <Link className="link" href="https://about.google/">
          About
        </Link>
        <Link className="link" href="https://store.google.com/">
          Store
        </Link>
      </div>
      <div className="flex space-x-4 items-center">
        <Link className="link" href="https://mail.google.com">
          Gmail
        </Link>
        <a
          onClick={() =>
            router.push(
              `/search?term=${router.query.term || "google"}&searchType=image`
            )
          }
          className="link"
        >
          Images
        </a>

        <User />
      </div>
    </header>
  );
}
