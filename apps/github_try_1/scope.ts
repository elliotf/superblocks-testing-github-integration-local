import { createSbScope } from "@superblocksteam/library";

export const AppScope = createSbScope<{}>(
  ({ entities }) => {
    return {};
  },
  {
    name: "App",
  },
);

export const App = AppScope.entities;
