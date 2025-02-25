import { ArticleContent } from "./components/ArticleContent";
import { ArticleHeader } from "./components/ArticleHeader";
import { BlogCallToAction } from "./components/BlogCallToAction";

export default function BlogPostPage() {
  return (
    <>
      <ArticleHeader />
      <ArticleContent />
      <BlogCallToAction />
    </>
  );
}
