interface HeadProps {
  params: { slug: string };
}

export default function Head({ params }: HeadProps) {
  const title = `Post ${params.slug}`;

  return (
    <>
      <title>{title}</title>
    </>
  );
}
