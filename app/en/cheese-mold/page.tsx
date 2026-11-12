import { Story } from "@/app/components/Story";
import { pageMetadata } from "@/app/metadata";
import { cheeseMolds } from "@/app/juustomuotti";

const copy = cheeseMolds.en;

export const metadata = pageMetadata(copy);

export default function Page() {
  return <Story copy={copy} />;
}
