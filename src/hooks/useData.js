import { useState } from "react";


const useData = () => {
    const [sidebar, setSidebar] = useState(false);



    return {
        setSidebar,
        sidebar
    }

};

export default useData;