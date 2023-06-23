import './loading.css';

export default function Loading() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-16 h-16'>
        <div className='spinner'></div>
      </div>
    </div>
  );
}
