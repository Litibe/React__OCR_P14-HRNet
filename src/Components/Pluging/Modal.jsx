import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../Redux/actions/style.action";

export default function Modal(props) {
    const dispatch = useDispatch();
    const showModal = useSelector((state) => state.style.showModal);

    return (
        <>
            {showModal === true && (
                <>
                    <div className="modal_body"></div>
                    <div className="modal_card">
                        <div className="modal_text">{props.text}</div>
                        <div
                            className="modal_close"
                            onClick={() => dispatch(closeModal())}
                        >
                            +
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
