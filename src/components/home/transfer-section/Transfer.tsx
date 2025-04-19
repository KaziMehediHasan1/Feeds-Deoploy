import Heading from "../shared/Heading";
import SubHeading from "../shared/SubHeading";
import OfficialTransfer from "./OfficialTransfer";
import RumourTransfer from "./RumourTransfer";

const Transfer = () => {
  return (
    <div className="shadow-lg p-2 my-3">
      <Heading heading="Transfers news" />
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-1">
          <SubHeading subHeading="Last transfers" />
          <OfficialTransfer />
        </div>
        <div className="flex-1">
          <SubHeading subHeading="Latest Rumours" />
          <RumourTransfer />
        </div>
      </div>
    </div>
  );
};

export default Transfer;
