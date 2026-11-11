import { moreStories } from "@/app/moreStories";
import { Story } from "@/app/components/Story";
import { pageMetadata } from "@/app/metadata";

const copy = moreStories.tax.fi;

export const metadata = pageMetadata(copy);

export default function Page() {
  return <Story copy={copy} />;
}
