import {
  type CustomComponentProps,
  Prop,
  registerComponent,
  Theme,
} from "@superblocksteam/library";
import "./AppHeader.css";
const properties = {
  title: Prop.string().propertiesPanel({
    label: "App Name",
    controlType: "INPUT_TEXT",
  }),
  appLogoUrl: Prop.string().propertiesPanel({
    label: "App Logo URL",
    controlType: "INPUT_TEXT",
  }),
  backgroundColor: Prop.string().propertiesPanel({
    label: "Background Color",
    controlType: "COLOR_PICKER",
  }),
  avatarUrl: Prop.string().propertiesPanel({
    label: "Avatar URL",
    controlType: "INPUT_TEXT",
  }),
  userEmail: Prop.string().propertiesPanel({
    label: "User Email",
    controlType: "INPUT_TEXT",
  }),
};
type ComponentProps = CustomComponentProps<typeof properties>;
const AppHeader = ({
  title = "App Name",
  appLogoUrl,
  backgroundColor,
  avatarUrl,
  userEmail,
}: ComponentProps) => {
  const headerStyle: React.CSSProperties = {
    // CSS variables for theming
    "--color-neutral": Theme.colors.neutral,
    "--color-neutral-100": Theme.colors.neutral100,
    "--color-neutral-200": Theme.colors.neutral200,
    "--color-neutral-300": Theme.colors.neutral300,
    "--color-neutral-400": Theme.colors.neutral400,
    "--color-neutral-500": Theme.colors.neutral500,
    "--color-neutral-700": Theme.colors.neutral700,
    "--color-neutral-900": Theme.colors.neutral900,
    "--color-text-color": Theme.colors.neutral700,
  } as React.CSSProperties;
  const headerClassName = "app-header";
  return (
    <div className={headerClassName} style={headerStyle}>
      <div className="app-header__left-section">
        {appLogoUrl && (
          <img src={appLogoUrl} alt="App Logo" className="app-header__logo" />
        )}
        <h1 className="app-header__title">{title}</h1>
      </div>

      <div className="app-header__right-section">
        {avatarUrl && (
          <div className="app-header__avatar-container">
            <div className="app-header__avatar-button">
              <img
                src={avatarUrl}
                alt="User Avatar"
                className="app-header__avatar"
              />
              <div className="app-header__avatar-button-text">
                <span className="app-header__avatar-button-text-name">
                  {userEmail?.split("@")[0]}
                </span>
                <span className="app-header__avatar-button-text-email">
                  {userEmail}
                </span>
              </div>
              <span className="app-header__avatar-button-dots">⋮</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default registerComponent("AppHeader", properties, AppHeader);
