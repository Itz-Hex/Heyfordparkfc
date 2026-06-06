import { Studio } from "sanity";
// @ts-ignore - .js config file
import config from "../../sanity.config.js";

export default function StudioPage() {
  return (
    <div style={{ height: "100vh" }}>
      <Studio config={config} />
    </div>
  );
}
