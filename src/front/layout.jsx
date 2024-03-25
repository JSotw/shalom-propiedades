const Layout = ({ children }) => {
  return (
    <>
      <main className="flex min-h-screen w-full flex-col container py-28 mx-auto">
        {children}
      </main>
    </>
  );
};

export default Layout;
