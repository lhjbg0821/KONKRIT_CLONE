import { GiChessKing } from "react-icons/gi";
import { BiWallet } from "react-icons/bi";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = ({ account, setAccount }) => {
  const onClickAccount = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <header className="max-w-screen-xl mx-auto px-4 flex justify-between font-bold">
      <Link to="/">
        <div className="flex iems-center text-main">
          <GiChessKing size={28} />
          <div className="ml-1 text-xl">Ble-Chess</div>
        </div>
      </Link>

      <div>
        {account ? (
          <div className="flex items-center p-2 bg-gray-800 rounded-full">
            <div className="bg-main w-6 h-6 rounded-full flex justify-center items-center">
              <BsFillBookmarkHeartFill />
            </div>
            <div className="ml-1">
              {account.substring(0, 4)}...
              {account.substring(account.length - 4)}
            </div>
          </div>
        ) : (
          <button
            className="flex items-center p-2 bg-gray-800 rounded-full"
            onClick={onClickAccount}
          >
            <div className="bg-main w-6 h-6 rounded-full flex justify-center items-center">
              <BiWallet />
            </div>
            <div className="ml-1">Connect</div>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
