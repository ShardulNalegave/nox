import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { Settings } from 'lucide-react';
import { endSession, getSession, getSessions, getUser, newSession } from '../utils/sql';
import { useState } from 'react';
import { message } from '@tauri-apps/plugin-dialog';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  const navigate = useNavigate();
  const [lastEntry, setLastEntry] = useState('');

  const onSubmit = async (e: any) => {
    e.preventDefault();
    let id: string = e.target['id_input'].value;
    id = id.replace(/^\*+|\*+$/gm, '');
    console.log(id);
    const user = (await getUser(id))[0];
    if (!user) {
      console.log('No user with given ID!');
      e.target['id_input'].value = '';
      setLastEntry('No user with given ID!');
      return;
    }

    const session = (await getSession(user.id))[0];
    if (session) {
      try {
        await endSession(session);
        console.log('Ended session');
      } catch (e) {
        console.log('Couldn\'t end session');
        console.log(e);
      }
      e.target['id_input'].value = '';
    } else {
      try {
        await newSession(user.id);
        console.log('Done');
      } catch (e) {
        console.log('Couldn\'t create new session');
        console.log(e);
      }
      setLastEntry(user.id);
      e.target['id_input'].value = '';
    }
  };

  const onEndDay = async () => {
    const sessions = await getSessions();
    for (let i = 0; i < sessions.length; i++) {
      const session = sessions[i];
      try {
        await endSession(session);
      } catch (e) {
        console.log('Couldn\'t end session');
        console.log(e);
      }
    }

    console.log('Ended all sessions');
    await message('Ended day', {
      title: 'Nox',
      kind: 'info',
    });
  };

  return (
    <div className='flex flex-col h-full select-none bg-zinc-800 p-[30px]'>
      <div className="grow"></div>
      <div>
        <h1 className='text-4xl text-white font-mono'>New Entry</h1>
        <form onSubmit={e => onSubmit(e)}>
          <div className='h-[20px]'></div>
          <input autoFocus name='id_input' placeholder='Enter ID' className='px-[25px] py-[15px] rounded-md w-full' />
          <div className='h-[15px]'></div>
          <div className='flex'>
            <input type='submit' className='py-[15px] px-[25px] rounded-md bg-blue-600 font-bold text-md' placeholder='Submit' />
            <div className='w-[15px]'></div>
            <button type='button' onClick={onEndDay} className='py-[15px] px-[25px] rounded-md bg-zinc-300 font-bold text-md'>End Day</button>
          </div>
          <div className='h-[25px]'></div>
          <button type='button' onClick={() => navigate({ to: '/settings' })} className='py-[15px] px-[25px] rounded-md bg-zinc-300 font-bold text-md'>
            <Settings className='inline-block' />
            <div className='w-[8px] inline-block'></div>
            Settings
          </button>
        </form>
        <div className='h-[15px]'></div>
        <p className='text-white'>{lastEntry}</p>
      </div>
      <div className="grow"></div>
    </div>
  );
}