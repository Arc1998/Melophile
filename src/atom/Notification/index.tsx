import { notification } from "antd";
import { CheckedIcon } from "./style";
import { NotificationPlacement } from "antd/es/notification/interface";


export const showToast = (params: {
    message: string;
    description: string;
    placement?: NotificationPlacement;
  }) => {
    const { message, description } = params;
    notification.open({
      message: message,
      description: description,
      icon: <CheckedIcon style={{ color: "#5FCFA9" }} />,
      duration: 5,
    });
  };