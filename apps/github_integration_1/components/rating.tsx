import { Rate } from "antd";
import {
  type CustomComponentProps,
  Prop,
  registerComponent,
  useUpdateProperties,
} from "@superblocksteam/library";

const properties = {
  value: Prop.number().default(3).propertiesPanel({
    label: "Default value",
  }),
  onChange: Prop.event().propertiesPanel({
    label: "On change",
  }),
};

type ComponentProps = CustomComponentProps<typeof properties>;

const Rating = ({ value, onChange }: ComponentProps) => {
  const updateProperties = useUpdateProperties();
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Rate
        value={value}
        defaultValue={value}
        onChange={(value) => {
          updateProperties({
            value,
          });
          void onChange?.();
        }}
      />
    </div>
  );
};

export default registerComponent("Rating", properties, Rating);
