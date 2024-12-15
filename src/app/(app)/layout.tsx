/** @format */

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='border border-red-500 p-4'>
      <h1 className='text-red-500'>(app)/layout.tsx</h1>
      {children}
    </div>
  );
};

export default AppLayout;
