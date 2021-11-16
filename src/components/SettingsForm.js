const SettingsForm = ({displaySettings, setDisplaySettings, customTimers, setCustomTimers, timers, setTimers}) => {

    const modalViewClass = displaySettings ? "modal-bg show-modal" : "modal-bg";

    const handleCancel = () => {
        setDisplaySettings(false);
    }

    //only used for display minutes label for prod
    const handleProdChange = (e) => {
        setCustomTimers({
            ...customTimers,
            prodTimer : {
                minutes: e.target.value,
                seconds: 0
            }
        });
    }
    
    //only used for display minutes label for break
    const handleBreakChange = (e) => {
        setCustomTimers({
            ...customTimers,
            breakTimer : {
                minutes: e.target.value,
                seconds: 0
            }
        });
    }

    const handleSave = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        setTimers({
            prodTimer:{
                minutes: formData.get('prod-mins'),
                seconds: 0
            },
            breakTimer:{
                minutes: formData.get('break-mins'),
                seconds: 0
            }
        });
        setDisplaySettings(false);
    }

    return (
        <div className={modalViewClass}>
            <div className="modal-content">
                <form onSubmit={e => handleSave(e)}>
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