// app/blog/ClientWrapper.tsx (Client component)
"use client";

export function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(true);
  return visible ? <div>{children}</div> : null;
}

// app/blog/page.tsx (Server Component)
import { ClientWrapper } from "./ClientWrapper";
import { ServerContent } from "./ServerContent";

export default function BlogPage() {
  return (
    <ClientWrapper>
      <ServerContent /> {/* Server Component passed as children */}
    </ClientWrapper>
  );
}