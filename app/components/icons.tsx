import cn from "classnames";

type IconProps = {
  name: string;
  className?: string;
};

function Icon({ name, className }: IconProps) {
  return (
    <span className={cn(className, "material-symbols-outlined")}>{name}</span>
  );
}

export function SendIcon(props: Omit<IconProps, "name">) {
  return <Icon name="send" {...props} />;
}

export function UploadIcon(props: Omit<IconProps, "name">) {
  return <Icon name="upload" {...props} />;
}

export function ClearIcon(props: Omit<IconProps, "name">) {
  return <Icon name="close" {...props} />;
}

export function UserIcon(props: Omit<IconProps, "name">) {
  return <Icon name="person" {...props} />;
}

export function AssistantIcon(props: Omit<IconProps, "name">) {
  return <Icon name="smart_toy" {...props} />;
}
