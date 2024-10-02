import { createStore } from '@tauri-apps/plugin-store';

export const Store = await createStore('nox-store.bin', {
  autoSave: true,
});