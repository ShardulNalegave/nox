import { getCurrentWindow } from "@tauri-apps/api/window";
import { X } from "lucide-react";

export function TitleBar() {
  const closeWindow = async () => {
    await getCurrentWindow().close();
  };

  return (
    <div className='bg-zinc-900 flex items-center select-none'>
      <div className='grow pl-[10px]'>
        <h1 className="text-white text-md font-mono">Nox</h1>
      </div>
      <div className="flex-none">
        <div className='hover:bg-red-700 text-white cursor-pointer p-[5px]' onClick={closeWindow}>
          <X />
        </div>
      </div>
    </div>
  );
}