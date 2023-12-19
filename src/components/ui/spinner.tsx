import React from "react";

type Props = {};

const Spinner = (props: Props) => {
    return (
        <div
            className="inline-block h-3 w-3 animate-spin rounded-full border-2 border-solid border-white-100 border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
        />
    );
};

export default Spinner;
