import { Story } from "@/app/components/Story";
import { pageMetadata } from "@/app/metadata";
import { cups } from "@/app/kuksa";

const copy = cups.en;

export const metadata = pageMetadata(copy);

export default function Page() {
  return <Story copy={copy} />;
}
