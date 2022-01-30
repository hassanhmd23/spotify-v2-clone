import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { currentTrackIdState, isPlayingState } from "../atoms/songAtom";
import UseSongInfo from "../hooks/UseSongInfo";
import UseSpotify from "../hooks/UseSpotify";

function Player() {
  const spotifyApi = UseSpotify();
  const { data: session } = useSession();
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  const [volume, setVolume] = useState(50);

  const songInfo = UseSongInfo();

  return (
    <div>
      {/* left */}
      <div>
        <img className="hidden md:inline h10 w10" src={songInfo.album?.images?.[0].url} alt="" />
      </div>
    </div>
  );
}

export default Player;
