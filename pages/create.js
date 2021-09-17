import { useState } from 'react';
import { useRouter } from 'next/dist/client/router';

export default function createSong() {
  const [formData, setFormData] = useState({});
  const router = useRouter();

  async function saveSong(e) {
    e.preventDefault();
    const response = await fetch('api/song', {
      method: 'POST',
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      router.push('/');
    }

    return await response.json();
  }

  return (
    <form onSubmit={saveSong}>
      <div className='shadow overflow-hidden sm:rounded-md'>
        <div className='px-4 py-5 bg-white sm:p-6'>
          <div className='grid grid-cols-6 gap-6'>
            <div className='col-span-6 sm:col-span-3'>
              <input
                type='text'
                placeholder='Title'
                name='title'
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className='mt-1 focus:ring-green-600 focus:border-green-600 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
              />
            </div>

            <div className='col-span-6 sm:col-span-3'>
              <textarea
                name='art'
                id=''
                cols='10'
                rows='10'
                placeholder='Paste link to Album art'
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    art: e.target.value,
                  })
                }
              />
            </div>
            <div className='col-span-6 sm:col-span-3'>
              <input
                type='text'
                placeholder='artist'
                name='artist'
                onChange={(e) =>
                  setFormData({ ...formData, artist: e.target.value })
                }
              />
            </div>
            <div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
              <button
                type='submit'
                className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
              >
                Add Song
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
