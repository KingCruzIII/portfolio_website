import { IconType } from "./Icon";

export type InternalSVGIconType =
  | "ansible"
  | "googlecloud"
  | "kube"
  | "ruby"
  | "typescript"
  | undefined;

const InternalSVG = ({ intIcon }: IconType) => {
  switch (intIcon) {
    default:
      return "";
  }
};

export default InternalSVG;
