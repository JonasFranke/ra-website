import { SiInstagram } from "@icons-pack/react-simple-icons";
import Link from "next/link";

export default function InstaLinkComponent() {
  return (
    <Link href="https://instagram.com/raumausstattung.franke" target="_blank">
      <SiInstagram
        title="Instagram"
        className="fill-black hover:fill-gray-500 dark:fill-gray-200 transition duration-100"
        size={32}
      />
    </Link>
  );
}
