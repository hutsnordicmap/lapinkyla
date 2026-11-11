import { Story } from "@/app/components/Story";
import { pageMetadata } from "@/app/metadata";
import { dress } from "@/app/puku";

const copy = dress.fi;

export const metadata = pageMetadata(copy);

export default function Page() {
  return <Story copy={copy} />;
}
