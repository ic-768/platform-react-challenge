export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs text-indigo-800">
      {children}
    </span>
  );
}
