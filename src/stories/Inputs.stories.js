import { Input } from "components";
export default {
  title: "export_system_logs/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  type: "text",
  shape: "srcRoundedBorder4",
  variant: "srcOutlineGray400",
  size: "smSrc",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
