import { registerScope, Outlet } from "@superblocksteam/library";
import { AppScope } from "./scope";

function App() {
  return <Outlet />;
}

export default registerScope(App, AppScope);
