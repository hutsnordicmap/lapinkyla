import { Story } from "@/app/components/Story";
import { pageMetadata } from "@/app/metadata";
import { chests } from "@/app/kiisa";

const copy = chests.en;

export const metadata = pageMetadata(copy);

export default function Page() {
  return <Story copy={copy} />;
}