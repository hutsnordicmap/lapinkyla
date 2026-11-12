import { Story } from "@/app/components/Story";
import { pageMetadata } from "@/app/metadata";
import { knives } from "@/app/puukko";

const copy = knives.fi;

export const metadata = pageMetadata(copy);

export default function Page() {
  return <Story copy={copy} />;
}
