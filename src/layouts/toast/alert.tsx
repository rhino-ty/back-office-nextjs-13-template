import { useEffect } from 'react';

const NormalAlertToast = (props: any) => {
  const { gToast, toast } = props;

  useEffect(() => {
    setTimeout(() => {
      toast(false);
    }, gToast?.interval || 3000);
  }, [gToast?.interval, toast]);

  return (
    <div className='absolute block z-alert w-full h-[30]  justify-center items-center select-none'>
      <div className='bg-alert text-white font-bold rounded-t px-4 py-2'>
        {gToast.title || 'empty title'}
      </div>
      <div className='border border-t-0 border-red-400 rounded-b bg-alert-msg px-4 py-3 text-black'>
        {gToast?.component ? gToast.component() : 'Message Empty'}
      </div>
    </div>
  );
};

export default NormalAlertToast;

// 사용 예시
// toast(
//   true,
//   'info',
//   'test',
//   () => <div>비밀번호 변경하는데 실패하였습니다.</div>,
//   2000
// );