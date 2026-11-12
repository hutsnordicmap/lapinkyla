import { Story } from "@/app/components/Story";
import { pageMetadata } from "@/app/metadata";
import { sleds } from "@/app/ahkio";

const copy = sleds.fi;

export const metadata = pageMetadata(copy);

export default function Page() {
  return <Story copy={copy} />;
}
