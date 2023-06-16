export default function Scroll() {
  const renderItems = () => {
    return Array.from({ length: 50 }, (_, index) => (
      <div key={index} className='mb-10 flex justify-center'>
        {index + 1}
      </div>
    ));
  };

  return <>{renderItems()}</>;
}
