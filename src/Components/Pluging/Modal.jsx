import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../Redux/actions/style.action";
import { useNavigate } from "react-router-dom";

export default function Modal(props) {
    const dispatch = useDispatch();
    const showModal = useSelector((state) => state.style.showModal);
    const navigate = useNavigate();

    const handleQuit = () => {
        if (props.link !== "") {
            navigate("/" + props.link);
        }
        dispatch(closeModal());
    };

    return (
        <>
            {showModal === true && (
                <>
                    <div className="modal_body"></div>
                    <div className="modal_card">
                        <div className="modal_text">{props.text}</div>
                        <div
                            className="modal_close"
                            onClick={(e) => handleQuit()}
                        >
                            +
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
