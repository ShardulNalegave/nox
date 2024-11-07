import { getCurrentWindow } from '@tauri-apps/api/window';
import { XIcon } from "lucide-react";

export default function WindowControls() {
  return (
    <div className='w-screen flex items-center bg-zinc-950 text-white sticky'>
      <div className="grow" data-tauri-drag-region>
        <h1 data-tauri-drag-region className='ml-[8px]'>Nox</h1>
      </div>
      <div className="hover:bg-red-700 duration-150 cursor-pointer" onClick={() => {
        getCurrentWindow().close();
      }}>
        <XIcon className="m-[8px]" size={18} />
      </div>
    </div>
  );
}