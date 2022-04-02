import { useRouter } from "next/dist/client/router";
import Menu from "../../components/Menu/Menu";
import Account from "./../../components/Account/Account";
function Username() {
  const router = useRouter();
  const { username } = router.query;
  return (
    <div>
      <div className="flex flex-row ">
        <Menu />
        <Account />
      </div>
    </div>
  );
}

export default Username;
