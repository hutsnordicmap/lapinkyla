import { bookStories } from "@/app/bookStories";
import { Story } from "@/app/components/Story";
import { pageMetadata } from "@/app/metadata";

const copy = bookStories.name.en;

export const metadata = pageMetadata(copy);

export default function Page() {
  return <Story copy={copy} />;
}
