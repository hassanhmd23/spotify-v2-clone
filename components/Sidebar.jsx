import { signOut, useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { playlistIdState } from "../atoms/playlistAtom";
import UseSpotify from "../hooks/UseSpotify";
import navigation from "../lib/navigation";

function sidebar() {
  const spotifyApi = UseSpotify();
  const { data: session, status } = useSession();
  const [playlists, setPlaylists] = useState([]);
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items);
      });
    }
  }, [session, spotifyApi]);
  return (
    <div className="text-gray-500 p-5 text-xs lg:text-sm border-r border-gray-900 overflow-scroll scrollbar-hide h-screen sm:max-w-[12rem] lg:max-w-[15rem] hidden md:inline-flex pb-36">
      <div className="space-y-4">
        {navigation.map((link, index) => {
          return (
            <>
              <button className="flex items-center space-x-2 hover:text-white">
                <link.icon className="h-5 w-5" />
                <p>{link.name}</p>
              </button>
              {(index + 1) % 3 === 0 && (
                <hr className="border-t-[0.1px] border-gray-900" />
              )}
            </>
          );
        })}
        {/* Playlists */}
        {playlists.map((playlist) => (
          <p
            key={playlist.id}
            onClick={() => setPlaylistId(playlist.id)}
            className="cursor-pointer hover:text-white"
          >
            {playlist.name}
          </p>
        ))}
      </div>
    </div>
  );
}

export default sidebar;
