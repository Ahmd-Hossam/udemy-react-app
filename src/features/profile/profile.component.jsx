import { useUser } from "./services/user-profile.service";

export default function Profile() {
  const { user } = useUser();
  return <p> hello Mr {user.name} From your profile</p>;
}
