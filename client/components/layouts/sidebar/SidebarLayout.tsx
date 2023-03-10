import Link from 'next/link';

export interface ISidebarLayout {}

const SidebarLayout: React.FC<ISidebarLayout> = () => {
  return <nav className="bg-red-500 w-full"></nav>;
};

export default SidebarLayout;
