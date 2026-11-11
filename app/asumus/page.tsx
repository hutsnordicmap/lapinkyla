import { dwellings } from "@/app/asumus";
import { Story } from "@/app/components/Story";
import { pageMetadata } from "@/app/metadata";

const copy = dwellings.fi;

export const metadata = pageMetadata(copy);

export default function Page() {
  return <Story copy={copy} />;
}
