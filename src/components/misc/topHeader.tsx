import { ReactNode } from "@tanstack/react-router";

function TopHeader({ title }: { title: ReactNode }) {
  return (
    <div className="mb-8 flex items-center">
      <div className="w-1 h-6 bg-yellow-500 mr-2" />
      <h1 className="text-md kode_mono_font">{title}</h1>
    </div>
  );
}

export default TopHeader;
