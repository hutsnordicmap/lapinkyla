import { articles } from "@/app/articles";
import { ArticlePage } from "@/app/components/ArticlePage";
import { pageMetadata } from "@/app/metadata";

const copy = articles.history.en;

export const metadata = pageMetadata(copy);

export default function Page() {
  return <ArticlePage copy={copy} />;
}
