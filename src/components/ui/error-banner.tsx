export default function ErrorBanner({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg bg-red-50 p-8 text-center">
      <p className="text-red-500">{children}</p>
    </div>
  );
}
