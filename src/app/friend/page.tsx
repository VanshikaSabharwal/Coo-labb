import AddFriend from "@/src/components/AddFriend/AddFriend";
import { FC } from "react";

const friend: FC = () => {
  return (
    <div>
      <div className="friendContainer">
        <h1 className="font-medium text-xl">Add your Friend</h1>
        <AddFriend />
      </div>
    </div>
  );
};

export default friend;
