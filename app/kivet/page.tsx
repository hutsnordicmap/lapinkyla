import { restStories } from "@/app/restStories";
import { Story } from "@/app/components/Story";
import { pageMetadata } from "@/app/metadata";

const copy = restStories.stones.fi;

export const metadata = pageMetadata(copy);

export default function Page() {
  return <Story copy={copy} />;
}
