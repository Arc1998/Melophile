import { notification } from "antd";
import { CheckedIcon, CrossIcon, ExclamatoryIcon } from "./style";
import { NotificationPlacement } from "antd/es/notification/interface";

export enum NotificationIconType {
  CHECKED = "checked",
  CROSS = "cross",
  EXCLAMATORY = "exclamatory",
}

export const showToast = (params: {
  message: string;
  description: string;
  iconType?: NotificationIconType;
  placement?: NotificationPlacement;
}) => {
  const { message, description, iconType } = params;
  let iconComponent = null;

  switch (iconType) {
    case NotificationIconType.CHECKED:
      iconComponent = <CheckedIcon style={{ color: "#5FCFA9" }} />;
      break;
    case NotificationIconType.CROSS:
      iconComponent = <CrossIcon style={{ color: "#FF6060" }} />;
      break;
    case NotificationIconType.EXCLAMATORY:
      iconComponent = <ExclamatoryIcon style={{ color: "#FFC133" }} />;
      break;
    default:
      break;
  }

  notification.open({
    message: message,
    description: description,
    icon: iconComponent,
    duration: 3,
  });
};
