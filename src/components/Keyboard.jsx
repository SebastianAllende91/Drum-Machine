import KeyboardKey from "./KeyboardKey";

const Keyboard = ({ sounds, play, power, deactivateAudio }) => (
  <div className="keyboard">
    {power
      ? sounds.map((sound) => (
          <KeyboardKey
            key={sound.keyCode}
            sound={sound}
            play={play}
            deactivateAudio={deactivateAudio}
          />
        ))
      : sounds.map((sound) => (
          <KeyboardKey
            key={sound.keyCode}
            sound={{ ...sound, url: "#" }}
            play={play}
            deactivateAudio={deactivateAudio}
          />
        ))}
  </div>
);

export default Keyboard;
