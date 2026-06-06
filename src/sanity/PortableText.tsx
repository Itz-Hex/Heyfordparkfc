import { PortableText as BasePortableText } from "@portabletext/react";

export function PortableText({ value }: { value: any }) {
  if (!value) return null;
  return (
    <BasePortableText
      value={value}
      components={{
        block: {
          normal: ({ children }) => <p className="mb-3">{children}</p>,
          h2: ({ children }) => (
            <h2 className="mt-6 mb-3 text-neutral-900" style={{ fontSize: "1.5rem", fontWeight: 700 }}>
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mt-4 mb-2 text-neutral-900" style={{ fontSize: "1.25rem", fontWeight: 700 }}>
              {children}
            </h3>
          ),
        },
        marks: {
          link: ({ value, children }) => (
            <a href={value?.href} className="text-[#6b8a0a] underline" target="_blank" rel="noreferrer">
              {children}
            </a>
          ),
        },
        list: {
          bullet: ({ children }) => <ul className="list-disc pl-5 mb-3 space-y-1">{children}</ul>,
          number: ({ children }) => <ol className="list-decimal pl-5 mb-3 space-y-1">{children}</ol>,
        },
      }}
    />
  );
}
