import { ArticlePage } from "@/app/components/ArticlePage";
import { pageMetadata } from "@/app/metadata";
import { siida } from "@/app/siida";

const copy = siida.en;

export const metadata = pageMetadata(copy);

export default function Page() {
  return <ArticlePage copy={copy} />;
}
