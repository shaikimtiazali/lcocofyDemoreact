import { FunctionComponent } from "react";

type MatterhornPopupType = {
  onClose?: () => void;
};

const MatterhornPopup: FunctionComponent<MatterhornPopupType> = ({
  onClose,
}) => {
  return (
    <div className="relative rounded-[8px] bg-white-200 w-[900px] flex flex-col p-[20px] box-border items-start justify-start max-w-[90%] max-h-[90%] overflow-auto sm:p-[10px] sm:box-border">
      <iframe
        className="self-stretch relative h-[560px] sm:h-[50.625vw!important]"
        src={`https://www.youtube.com/embed/DJImX19wyLY?rel=0&autoplay=1&mute=1`}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

export default MatterhornPopup;
