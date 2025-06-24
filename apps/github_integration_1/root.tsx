import { MakeEditableWithSuperblocks } from "@superblocksteam/library";

import App from "./App";
import appTheme from "./appTheme";

import "./app.css";

export default function Root() {
  return (
    <MakeEditableWithSuperblocks
      name="appTheme"
      settings={{
        theme: appTheme,
      }}
    >
      <App />
    </MakeEditableWithSuperblocks>
  );
}
