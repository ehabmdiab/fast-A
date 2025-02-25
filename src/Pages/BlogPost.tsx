import { ArticleContent } from "../components/blog-post/ArticleContent";
import { ArticleHeader } from "../components/blog-post/ArticleHeader";
import { BlogCallToAction } from "../components/blog-post/BlogCallToAction";

export default function BlogPostPage() {
  return (
    <>
      <ArticleHeader />
      <ArticleContent />
      <BlogCallToAction />
    </>
  );
}
