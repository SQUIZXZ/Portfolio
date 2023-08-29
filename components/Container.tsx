import React from "react";

type ContainerProps = {
    children: React.ReactNode;
  };
  
const Container = (props: ContainerProps ) => {
    return(
        <div className="max-w-screen-2xl m-auto">
            {props.children}
        </div>
    )
}

export default Container; 