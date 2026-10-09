import { memo } from "react";

function Button({children, ...props}){
    return (
        <button {...{props}}>{children}</button>
    );
}

export default button; 