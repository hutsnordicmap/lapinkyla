import { ArticlePage } from "@/app/components/ArticlePage";
import { pageMetadata } from "@/app/metadata";
import { villages } from "@/app/villages";

const copy = villages.en;

export const metadata = pageMetadata(copy);

export default function Page() {
  return <ArticlePage copy={copy} />;
}
