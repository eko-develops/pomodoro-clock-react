const SettingsForm = ({displaySettings, setDisplaySettings, customTimers, setCustomTimers}) => {

    const modalViewClass = displaySettings ? "modal-bg show-modal" : "modal-bg";

    const handleCancel = () => {
        setDisplaySettings(false);
    }

    const handleProdChange = (e) => {
        setCustomTimers({
            ...customTimers,
            prodTimer : {
                minutes: e.target.value,
                seconds: 0
            }
        });
    }

    const handleBreakChange = (e) => {
        setCustomTimers({
            ...customTimers,
            breakTimer : {
                minutes: e.target.value,
                seconds: 0
            }
        });
    }

    return (
        <div className={modalViewClass}>
            <div className="modal-content">
                <form>
                    <label>Productivity</label>
                    <span>{customTimers.prodTimer.minutes} minutes</span>
                    <input onChange={e => handleProdChange(e)} value={customTimers.prodTimer.minutes} name="prod-mins" type="range" min="5" max="120" step="5" />
                    <label>Break</label>
                    <span>{customTimers.breakTimer.minutes} minutes</span>
                    <input onChange={e => handleBreakChange(e)} value={customTimers.breakTimer.minutes} name="break-mins" type="range" min="5" max="120" step="5" />
                    <button type="submit" className="start-button">Save</button>
                    <button onClick={handleCancel} type="button" className="reset-button">Cancel</button>
                </form>
            </div>
        </div>
    )
}

export default SettingsForm