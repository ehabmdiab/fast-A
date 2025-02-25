import { BlogSubscriptionSection } from "./components/BlogSubscriptionSection";
import { BlogTopicsSection } from "./components/BlogTopicsSection";

export default function BlogPage() {
  return (
    <div>
      <BlogTopicsSection />
      <BlogSubscriptionSection />
    </div>
  );
}
