import React, { useContext } from 'react'
import { Button } from '@chakra-ui/react';
import UserDataCollect from '../Components/UserDataCollect/UserDataCollect';
import './BuilderArea.css'
import Footer from '../Components/Footer/Footer';
import ResumeContext from '../Context/ResumeContext';
import PropagateLoader from "react-spinners/PropagateLoader";

const BuilderArea = (props) => {
    const { showComponent, setShowComponent, loading, handlePrint } = useContext(ResumeContext)

    const handleSelectNewTemplate = () => {
        setShowComponent(!showComponent)
    }

    return (
        <>
            {loading && <PropagateLoader id='spinner' color="#319795" size={30} />}

            <div id='main-box' className="d-flex justify-content-between flex-wrap mt-4 mx-2">
                <UserDataCollect />
                <div id='theme-box-border'>
                    {props.theme}
                </div>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                <Button className='mx-2 my-5' colorScheme={'teal'} variant={'outline'} onClick={handlePrint}>Print</Button>
                <Button className='mx-2 my-5' colorScheme={'teal'} variant={'outline'} onClick={handleSelectNewTemplate}>Select Another Template</Button>
            </div>
            <Footer />
        </>
    )
}

export default BuilderArea
