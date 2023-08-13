import React from "react";

import SongImage from "./SongImage";
import Visualizer from "./Visualizer";

import "../styles/SongDetails.css";

const SongDetails = ({
    song,
    visualizer,
    source,
    analyser,
    currentSongIndex,
}) => {
    return (
        <div className="songDetails">
            <div className="songDetails__imageContainer">
                {!visualizer && <SongImage url={song.image} />}
                {visualizer && (
                    <Visualizer
                        source={source}
                        analyser={analyser}
                        currentSongIndex={currentSongIndex}
                    />
                )}
            </div>
            ...
        </div>
    );
};

export default SongDetails;
