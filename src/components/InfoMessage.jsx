import logo from "@/assets/logo.svg";
import Image from "next/image";

const InfoMessage = ({message}) => {
  return (
    <div className="new_trainer_guide">
      <Image src={logo} alt="log" width={200} height={100} />

      <p>
        {message}
      </p>
    </div>
  );
};

export default InfoMessage;
