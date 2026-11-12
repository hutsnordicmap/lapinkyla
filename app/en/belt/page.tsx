import { Story } from "@/app/components/Story";
import { pageMetadata } from "@/app/metadata";
import { belts } from "@/app/vyo";

const copy = belts.en;

export const metadata = pageMetadata(copy);

export default function Page() {
  return <Story copy={copy} />;
}
