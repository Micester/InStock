// Inventory Button Component
import './Button.scss';

const Buttons = () => {
    return (
        <section className="Button">
            <div className="Button-Left">
                <button className="Button-Left__Trash"></button>

            </div>

            <div className="Button-Right">
                <button className="Button-Right__Edit"></button>
            </div>
        </section>
    )
}
export default Buttons;