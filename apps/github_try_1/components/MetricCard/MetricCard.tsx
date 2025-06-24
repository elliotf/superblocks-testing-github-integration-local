import {
  type CustomComponentProps,
  Prop,
  registerComponent,
  Theme,
  SbIcon,
  Dim,
} from "@superblocksteam/library";
import "./MetricCard.css";
const properties = {
  title: Prop.string().propertiesPanel({
    label: "Title",
    controlType: "INPUT_TEXT",
  }),
  // Keep value concise for better display
  // Examples: "$64k" instead of "$64,678.99", "6h" instead of "6 hours 3 minutes", "103.6k" instead of "103,688"
  value: Prop.string().propertiesPanel({
    label: "Value",
    controlType: "INPUT_TEXT",
    helpText:
      "Keep concise for better display. Examples: '$64k' instead of '$64,678.99', '6h' instead of '6 hours 3 minutes', '103.6k' instead of '103,688'",
  }),
  // Example: ↗ 12%
  changeValue: Prop.string().propertiesPanel({
    label: "Change Value",
    controlType: "INPUT_TEXT",
  }),
  // Positive is colored green, negative is colored red
  changeType: Prop.string().propertiesPanel({
    label: "Change Type",
    controlType: "DROP_DOWN",
    options: [
      {
        label: "None",
        value: "none",
      },
      {
        label: "Positive",
        value: "positive",
      },
      {
        label: "Negative",
        value: "negative",
      },
    ],
  }),
  icon: Prop.string().propertiesPanel({
    label: "Icon",
    controlType: "ICON_SELECTOR",
  }),
};
type ComponentProps = CustomComponentProps<typeof properties>;
const MetricCard = ({
  title = "Metric Title",
  value = "0",
  changeValue,
  changeType,
  icon,
}: ComponentProps) => {
  const metricStyle: React.CSSProperties = {
    borderRadius: Theme.borderRadius.value,
    "--color-neutral": Theme.colors.neutral,
    "--color-neutral-100": Theme.colors.neutral100,
    "--color-neutral-200": Theme.colors.neutral200,
    "--color-neutral-300": Theme.colors.neutral300,
    "--color-neutral-400": Theme.colors.neutral400,
    "--color-neutral-500": Theme.colors.neutral500,
    "--color-neutral-700": Theme.colors.neutral700,
    "--color-neutral-900": Theme.colors.neutral900,
    "--color-primary-500": Theme.colors.primary500,
    "--color-primary-600": Theme.colors.primary600,
    "--color-primary-700": Theme.colors.primary700,
    "--color-primary-highlight": Theme.colors.primaryHighlight,
    "--color-success": Theme.colors.success,
    "--color-danger": Theme.colors.danger,
  } as React.CSSProperties;
  const metricClassName = "metric";
  return (
    <div className={metricClassName} style={metricStyle}>
      <h3 className="metric__title">{title}</h3>
      <div className="metric__value-container">
        <div className="metric__change-icon">
          <SbIcon
            icon={icon || "info"}
            color="var(--color-primary-500)"
            size={Dim.px(18)} // NEVER change this size
          />
        </div>
        <div className="metric__value-right-container">
          <div className="metric__value">{value}</div>
          {changeValue && (
            <div
              className={
                changeType
                  ? `metric__change-indicator metric__change-indicator--${changeType}`
                  : "metric__change-indicator"
              }
            >
              {changeValue}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default registerComponent("MetricCard", properties, MetricCard);
