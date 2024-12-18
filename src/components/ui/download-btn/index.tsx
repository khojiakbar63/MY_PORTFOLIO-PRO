import { FC } from "react";
import { CgSoftwareDownload } from "react-icons/cg";
import "./_style.scss";

const DownloadCV: FC = () => {
  return (
    <a
      href="#" // Replace with the actual path to your CV file
      download="YourCV.pdf" // Suggests the file name when downloading
      className="download-btn"
    >
      <p className="download-text">DOWNLOAD CV</p>
      <CgSoftwareDownload className="download-icon" />
    </a>
  );
};

export default DownloadCV;
