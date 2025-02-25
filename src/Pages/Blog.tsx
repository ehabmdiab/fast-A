import { BlogSubscriptionSection } from "../components/blog/BlogSubscriptionSection";
import { BlogTopicsSection } from "../components/blog/BlogTopicsSection";

export default function BlogPage() {
  return (
    <div>
      <BlogTopicsSection />
      <BlogSubscriptionSection />
    </div>
  );
}
