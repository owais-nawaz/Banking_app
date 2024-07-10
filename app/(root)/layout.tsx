import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: 'Owais', lastName: 'Nawaz' }
  return (
    <main className = 'flex h-screen w-full font-inter'>
      <Sidebar user={loggedIn}/>
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo1.png" width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
export default RootLayout