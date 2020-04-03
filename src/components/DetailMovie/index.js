import React from "react";
import { useParams} from "react-router-dom";

function DetailMovie() {

let { id } = useParams();

    return (
      <>
        <h3>{id}</h3>
      </>
    );
}

export default DetailMovie;