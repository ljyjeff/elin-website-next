
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import styles from "./ElinLightbox.module.css";


interface ElinLightboxProps {
  index: number,
  photos: SlideImage[],
  onClose: () => void,
}

export default function ElinLightbox({ photos, index, onClose }: ElinLightboxProps) {

  return <Lightbox
    className={styles.lightbox}
    carousel={{ padding: "35px", preload: 2 }}
    thumbnails={{
      vignette: true,
      height: 50,
      width: 88,
    }}
    slides={photos}
    open={index >= 0}
    index={index}
    close={onClose}
    plugins={[Thumbnails, Zoom]}
  />;
}
