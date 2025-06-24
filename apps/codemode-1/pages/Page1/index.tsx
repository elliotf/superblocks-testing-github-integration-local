import {
  SbPage,
  Dim,
  SbSection,
  SbColumn,
  registerPage,
  SbTable,
} from "@superblocksteam/library";
import { Page1, Page1Scope } from "./scope";
function Page() {
  const { API1 } = Page1;
  return (
    <SbPage name="Page1" height={Dim.fill()} width={Dim.fill()}>
      <SbSection height={Dim.fill()}>
        <SbColumn width={Dim.fill()}></SbColumn>
      </SbSection>
    </SbPage>
  );
}
export default registerPage(Page, Page1Scope);
