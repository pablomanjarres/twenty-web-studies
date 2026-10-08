import { avatar } from "./data";
export function AvatarGroup({
  ids = [1, 2, 3],
  className = "",
}: {
  ids?: number[];
  className?: string;
}) {
  return (
    <span className={`ov3-avatar-group ${className}`}>
      {ids.map((id) => (
        <img key={id} src={avatar(id)} alt="Studio team member" />
      ))}
    </span>
  );
}
