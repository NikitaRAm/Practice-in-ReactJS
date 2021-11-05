import React, { Fragment, useContext, useEffect } from "react"
import { FirebaseContext } from "../context/firebase/firebaseContext"
import { Form } from "../сomponents/Form"
import { Loader } from "../сomponents/Loader"
import { Notes } from "../сomponents/Notes"

export const Home = () => {
    const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext)

    useEffect(() => {
        fetchNotes()
        //eslint-disable-next-line
    },[])

    return (
        <Fragment>
            <Form/>

            <hr/>

            {loading
                ? <Loader />
                : <Notes notes={notes} onRemove={removeNote}/>
            }

        </Fragment>
    )
}