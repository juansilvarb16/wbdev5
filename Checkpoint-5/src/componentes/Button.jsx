import { memo } from "react";

function button({children, ...props}){
    return (
        <button {...{props}}>{children}</button>
    );
}

export default button; 