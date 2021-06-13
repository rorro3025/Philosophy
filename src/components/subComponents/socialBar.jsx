import React from "react";
import facebook from "../img/facebook.png";
import instagram from "../img/instagram.png";
import spotify from "../img/spotify.png";
import youtube from "../img/youtube.png";

function SocialBar() {
  const socialButtons = [
    {
      id: 1,
      name: "Spotify_logo",
      src: spotify,
      href: "https://open.spotify.com/user/rorro3025?si=f36f282a3d694af1",
    },
    {
      id: 2,
      name: "Facebook_logo",
      src: facebook,
      href: "https://www.facebook.com/rodrichido",
    },
    {
      id: 3,
      name: "Instagram_logo",
      src: instagram,
      href: "https://www.instagram.com/rorro5894",
    },
    {
      id: 4,
      name: "YouTube_logo",
      src: youtube,
      href: "https://www.instagram.com/rorro5894",
    },
  ];

  return (
    <div className="col-sm text-center">
      {socialButtons.map((item) => (
        <a key={item.id} target="_blank" rel="noreferrer" href={item.href}>
          <img src={item.src} alt={item.name} width="25px" className="m-1" />
        </a>
      ))}
    </div>
  );
}

export default SocialBar;
