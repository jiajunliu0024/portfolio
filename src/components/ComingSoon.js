import { Divider } from "antd";
import BlogHeader from "../components/menu_components/BlogHeader";

export default function ComingSoon() {
  return (
    // this is the coming soon page
    <div section="/coming-soon">
      {" "}
      <BlogHeader></BlogHeader>
      <Divider />
      <div className="flex flex-col items-center justify-center">
        <h1 className="py-4 text-xl">Coming Soon</h1>
        <p>
          I am working hard to launch this page. Stay tuned for more
          information.
        </p>
      </div>
    </div>
  );
}
