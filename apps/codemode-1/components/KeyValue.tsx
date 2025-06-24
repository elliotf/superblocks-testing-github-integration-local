import {
  type CustomComponentProps,
  Prop,
  registerComponent,
  Theme,
} from "@superblocksteam/library";
const properties = {
  label: Prop.string().propertiesPanel({
    label: "Label",
    controlType: "INPUT_TEXT",
  }),
  data: Prop.any().propertiesPanel({
    label: "Data",
    isJSConvertible: false,
    controlType: "COMPUTED_CODE_EDITOR",
  }),
};
type ComponentProps = CustomComponentProps<typeof properties>;
const KeyValue = ({ data, label }: ComponentProps) => {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };
  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "30% 1fr",
    background: Theme.colors.neutral100,
    border: `1px solid ${Theme.colors.neutral100}`,
    rowGap: "1px",
    borderRadius: "4px",
    overflow: "hidden",
  };
  const cellStyle: React.CSSProperties = {
    padding: "10px 16px",
    background: Theme.colors.neutral,
    borderTop: "none",
    borderLeft: "none",
  };
  const labelStyle: React.CSSProperties = {
    ...cellStyle,
    gridColumn: "span 2",
    fontSize: "14px",
    fontWeight: 500,
    color: Theme.colors.neutral700,
  };
  return (
    <div style={containerStyle}>
      <div style={gridStyle}>
        {label && label.trim() !== "" && <div style={labelStyle}>{label}</div>}
        {Object.entries((data || {}) as Record<string, any>).map(
          ([key, value]) => (
            <>
              <div key={`${key}-key`} style={cellStyle}>
                <span
                  style={{
                    fontWeight: 500,
                  }}
                >
                  {key}
                </span>
              </div>
              <div key={`${key}-value`} style={cellStyle}>
                <span>{value}</span>
              </div>
            </>
          ),
        )}
      </div>
    </div>
  );
};
export default registerComponent("KeyValue", properties, KeyValue);
