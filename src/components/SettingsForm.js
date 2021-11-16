const SettingsForm = ({displaySettings, setDisplaySettings}) => {

    const modalViewClass = displaySettings ? "modal-bg show-modal" : "modal-bg";

    const handleCancel = () => {
        setDisplaySettings(false);
    }

    return (
        <div className={modalViewClass}>
            <div className="modal-content">
                <form>
                    <label>Productivity</label>
                    <span>productivity minutes</span>
                    <input name="prod-mins" type="range" min="5" max="120" step="5" />
                    <label>Break</label>
                    <span>break minutes</span>
                    <input name="break-mins" type="range" min="5" max="120" step="5" />
                    <button type="submit" className="start-button">Save</button>
                    <button onClick={handleCancel} type="button" className="reset-button">Cancel</button>
                </form>
            </div>
        </div>
    )
}

export default SettingsForm