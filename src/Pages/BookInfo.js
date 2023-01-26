import React from 'react';
import CreateInfo from "../Component/CreateInfo";
import ReadInfo from "../Component/ReadInfo";

const BookInfo = () => {
    return (
        <div className="p-5">
            <CreateInfo/>
            <ReadInfo/>
        </div>
    );
};

export default BookInfo;