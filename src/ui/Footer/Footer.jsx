import {useNavigate} from "react-router-dom";

export default function Footer() {
    useNavigate();
    return (
        <>
            <p className="fw-bold text-center pt-5">
                это футер
            </p>
        </>
    )
}