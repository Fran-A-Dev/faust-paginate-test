import { CldImage } from "next-cloudinary";
import styles from "./FranImage.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";

let cx = classNames.bind(styles);
export default function FranImage() {
  const imageIds = [
    "the_rise_of_skywalker_tstomp",
    "the_force_awakens_gzj4ld",
    "Last_Jedi_sp1azv",
    "a_new_hope_us6zww",
    "empire_strikes_back_e8ckjd",
    "ROTJ_ckdwh5",
  ];

  const [imageId, setImageId] = useState(imageIds[0]);
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <main>
      <h1 className={cx("h1")}>
        <CldImage
          crop="fill"
          width="1200"
          height="500"
          src={`${imageIds[imageIndex]}`}
          alt="Star Wars Pictures"
          overlays={[
            {
              width: 2670 - 20,
              crop: "fit",
              position: {
                x: 10,
                y: 10,
                gravity: "north_west",
              },
              text: {
                color: "white",
                fontFamily: "Helvetica",
                fontSize: 45,
                fontWeight: "bold",
                stroke: "true",
                border: "20px_solid_green",
                letterSpacing: 14,
                text: "May the Force be with You",
              },
            },
          ]}
        />
        <button onClick={() => setImageIndex(imageIndex - 1)}>Previous</button>
        <button onClick={() => setImageIndex(imageIndex + 1)}>Next</button>
      </h1>
    </main>
  );
}
