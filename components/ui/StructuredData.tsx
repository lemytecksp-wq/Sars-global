type StructuredDataProps = {
  items?: ReadonlyArray<string | unknown>;
};

export function StructuredData({ items = [] }: StructuredDataProps) {
  return (
    <>
      {items.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: typeof item === "string" ? item : JSON.stringify(item),
          }}
        />
      ))}
    </>
  );
}
