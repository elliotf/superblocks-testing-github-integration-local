import {
  type CustomComponentProps,
  Prop,
  registerComponent,
  Theme,
  SbIcon,
  SbDropdown,
  SbButton,
  Dim,
} from "@superblocksteam/library";
import "./AppSidebar.css";
const properties = {
  logoUrl: Prop.string().propertiesPanel({
    label: "Logo URL",
    controlType: "INPUT_TEXT",
  }),
  // Expected data structure for sidebarLinks:
  // [
  //   {
  //     header: string, // Optional section header
  //     links: Array<{ label: string, icon: string }> // Array of link objects with label property and icon property that is the material ui icon name
  //   }
  // ]
  sidebarLinks: Prop.any().propertiesPanel({
    label: "Sidebar Links",
    controlType: "COMPUTED_CODE_EDITOR",
    isJSConvertible: false,
  }),
  selectedLink: Prop.string().propertiesPanel({
    label: "Selected Link",
    controlType: "INPUT_TEXT",
  }),
};
type ComponentProps = CustomComponentProps<typeof properties>;
type SidebarSection = {
  header?: string;
  links?: Array<{
    label: string;
    icon?: string;
  }>;
};
const AppSidebar = ({
  logoUrl,
  sidebarLinks,
  selectedLink,
}: ComponentProps) => {
  const style: React.CSSProperties = {
    "--color-neutral": Theme.colors.neutral,
    "--color-neutral-100": Theme.colors.neutral100,
    "--color-neutral-200": Theme.colors.neutral200,
    "--color-neutral-300": Theme.colors.neutral300,
    "--color-neutral-400": Theme.colors.neutral400,
    "--color-neutral-500": Theme.colors.neutral500,
    "--color-neutral-700": Theme.colors.neutral700,
    "--color-neutral-900": Theme.colors.neutral900,
  } as React.CSSProperties;
  const sections = Array.isArray(sidebarLinks)
    ? (sidebarLinks as SidebarSection[])
    : [];
  const selectedLinkToUse =
    selectedLink && selectedLink !== ""
      ? selectedLink
      : sections[0].links?.[0]?.label;
  return (
    <div className="app-sidebar" style={style}>
      <div className="app-sidebar__header">
        {logoUrl && (
          <img src={logoUrl} alt="Logo" className="app-sidebar__logo" />
        )}
      </div>
      <div className="app-sidebar__sections">
        {sections.map((section, idx) => (
          <div key={idx} className="app-sidebar__section">
            {section.header && (
              <div className="app-sidebar__section-header">
                {section.header}
              </div>
            )}
            <div className="app-sidebar__links">
              {section.links?.map((link, linkIdx) => (
                <button
                  key={linkIdx}
                  className={`app-sidebar__link ${selectedLinkToUse !== undefined && selectedLinkToUse === link.label ? "app-sidebar__link--selected" : ""}`}
                >
                  {link.icon && (
                    <div className="app-sidebar__icon">
                      <SbIcon
                        icon={link.icon}
                        size={Dim.px(14)}
                        color={"var(--color-neutral-500)"}
                      />
                    </div>
                  )}
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="app-sidebar__footer">
        <SbDropdown
          options={[
            {
              label: "App settings",
              value: "app-settings",
            },
            {
              label: "User settings",
              value: "production",
            },
          ]}
          defaultOptionValue={"app-settings"}
        />
        <div className="app-sidebar__contrast-button-wrapper">
          <SbButton
            variant="tertiary"
            icon="contrast"
            className="app-sidebar__contrast-button"
            textStyle={{
              variant: "body-small",
              textColor: {
                default: "var(--color-neutral-500)",
              },
            }}
            border={{
              top: {
                color: "var(--color-neutral-100)",
                width: {
                  mode: "px",
                  value: 0,
                },
                style: "solid",
              },
              right: {
                color: "var(--color-neutral-100)",
                width: {
                  mode: "px",
                  value: 0,
                },
                style: "solid",
              },
              bottom: {
                color: "var(--color-neutral-100)",
                width: {
                  mode: "px",
                  value: 0,
                },
                style: "solid",
              },
              left: {
                color: "var(--color-neutral-100)",
                width: {
                  mode: "px",
                  value: 0,
                },
                style: "solid",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default registerComponent("AppSidebar", properties, AppSidebar);
