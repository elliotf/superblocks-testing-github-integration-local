import {
  createSbScope,
  SB,
  SbApi,
  SbEventFlow,
} from "@superblocksteam/library";
export const Page1Scope = createSbScope<{}>(
  ({ entities: { API1 } }) => ({
    API1: SbApi({
      onError: SbEventFlow.start(),
      onSuccess: SbEventFlow.start(),
    }),
  }),
  {
    name: "Page1",
  },
);
export const Page1 = Page1Scope.entities;
