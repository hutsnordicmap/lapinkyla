import { Story } from "@/app/components/Story";
import { pageMetadata } from "@/app/metadata";
import { brooches } from "@/app/risku";

const copy = brooches.fi;

export const metadata = pageMetadata(copy);

export default function Page() {
  return <Story copy={copy} />;
}
