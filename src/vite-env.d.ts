/// <reference types="vite/client" />

interface Window {
    ethereum: any
}
declare function Route(
    props: RouteProps
  ): React.ReactElement | null;
  
  interface RouteProps {
    caseSensitive?: boolean;
    children?: React.ReactNode;
    element?: React.ReactElement | null;
    index?: boolean;
    path?: string; // <-- string type only, no string[]
  }
  