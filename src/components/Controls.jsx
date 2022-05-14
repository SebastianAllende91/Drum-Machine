const Controls = ({
  stop,
  name,
  power,
  volume,
  handleVolumeChange,
  changeSoundGroup,
}) => (
  <div className="controls">
    <button className="btn-controler" onClick={stop}>
      Turn Power {power ? "OFF" : "ON"}
    </button>
    <h2>Volume: %{Math.round(volume * 100)}</h2>
    <input
      max="1"
      min="0"
      step="0.01"
      type="range"
      value={volume}
      onChange={handleVolumeChange}
    />
    <h2 id="display">{name}</h2>
    <button className="btn-controler" onClick={changeSoundGroup}>
      Change Sounds Group
    </button>
  </div>
);

export default Controls;
