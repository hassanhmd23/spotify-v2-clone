import React from "react";
import navigation from "../lib/navigation";

function sidebar() {
  return (
    <div className="text-gray-500 p-5 text-sm border-r border-gray-900">
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
        <p className="cursor-pointer hover:text-white">Playlists name...</p>
        <p className="cursor-pointer hover:text-white">Playlists name...</p>
        <p className="cursor-pointer hover:text-white">Playlists name...</p>
        <p className="cursor-pointer hover:text-white">Playlists name...</p>
        <p className="cursor-pointer hover:text-white">Playlists name...</p>
        <p className="cursor-pointer hover:text-white">Playlists name...</p>
        <p className="cursor-pointer hover:text-white">Playlists name...</p>
        <p className="cursor-pointer hover:text-white">Playlists name...</p>
        <p className="cursor-pointer hover:text-white">Playlists name...</p>
        <p className="cursor-pointer hover:text-white">Playlists name...</p>
        <p className="cursor-pointer hover:text-white">Playlists name...</p>
        <p className="cursor-pointer hover:text-white">Playlists name...</p>
      </div>
    </div>
  );
}

export default sidebar;
