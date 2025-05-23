import { useUser } from "./services/user-profile.service";

export default function Profile() {
  const { user } = useUser();
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
        <img style={{ width: "30px", height: "30px" }} src={user.img} alt="" />
        <span> {user.name}</span>
      </div>
    </>
  );
}
