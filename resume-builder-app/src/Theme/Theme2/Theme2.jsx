import React, { useContext } from 'react'
import { Box, Text, Image, Heading, Badge } from '@chakra-ui/react';
import './theme2.css'
import ResumeContext from '../../Context/ResumeContext';

const Theme2 = (props) => {
    const { componentRef, themeData } = props;
    const { name, address, phone, email, profile, profileImage, summary, skill } = themeData.personalData;

    const { checkProj, checkWork, checkAward } = useContext(ResumeContext)
    const { projectTitles, projectDesc } = themeData.projectData;
    const { educationTitles, educationDesc } = themeData.educationData;
    const { workTitles, workDesc } = themeData.workData;
    const { awards } = themeData.awardData;


    return (
        <Box id="section-to-print" ref={componentRef}>
            <Box id="theme2">
                <header id='info' className='text-center m-2 d-flex justify-content-between align-items-center'>
                    <Box className='info-text text-start'>
                        <Heading as='h2' size='xl' className='mb-2'>
                            {name}
                        </Heading>
                        <Text fontWeight={'500'} fontSize='xl' className='mt-1 mb-2'>
                            {profile}
                        </Text>
                        <Text width={'400px'} fontSize='sm' className='mt-1 mb-2 summary-text'>
                            {summary}
                        </Text>
                    </Box>
                    <Box className='mx-2 mb-2'>
                        <Image id='resume-avatar' borderRadius={100} boxSize={'150px'} src={profileImage} alt='Profile Picture' />
                    </Box>
                </header>
                <div className="w-100 border border-dark m-auto"></div>
                <section className='bottom-part d-flex mt-3'>
                    <section className='partition-1'>
                        <Box>
                            <Heading fontSize='2xl' className='my-2'>Contact</Heading>
                            <Box className='mt-3'>
                                <Heading fontSize='md' className='my-2'>Phone</Heading>
                                <Text fontSize={'sm'}>{phone}</Text>
                                <Heading fontSize='md' className='my-2'>Email</Heading>
                                <Text fontSize={'sm'}>{email}</Text>
                                <Heading fontSize='md' className='my-2'>Address</Heading>
                                <Text width={'190px'} fontSize={'sm'}>{address}</Text>
                            </Box>
                        </Box>
                        <Box className='mt-5'>
                            <Heading fontSize='2xl' className='my-2'>Skills</Heading>
                            <Box className='mt-3'>
                                {
                                    skill.split(',').map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <Badge className='mx-1' key={index}>{item}</Badge><br />
                                            </div>
                                        )
                                    })
                                }
                            </Box>
                        </Box>
                    </section>

                    <div style={{ height: '536px' }} className="border border-dark mx-4"></div>

                    <section className='partition-2'>

                        <Box id='education-area'>
                            <Heading fontSize='2xl' className='my-2'>Education</Heading>
                            {
                                Object.entries(educationTitles).map((element, index) => {
                                    return (
                                        <Box key={index} className="mt-3">
                                            <Heading fontSize='md' className='my-2'>{element[1]}</Heading>
                                            <Box className='sub-details'>
                                                {
                                                    (Object.entries(educationDesc)[index] === undefined)
                                                        ?
                                                        null
                                                        :
                                                        Object.entries(educationDesc)[index][1].split(',').map((element, index) => {
                                                            return <li key={index}>{element}</li>
                                                        })
                                                }
                                            </Box>
                                        </Box>
                                    )
                                })
                            }
                        </Box>

                        {
                            !checkProj &&
                            <Box id='project-area'>
                                <Heading fontSize='2xl' className='mt-4'>Projects</Heading>
                                {
                                    Object.entries(projectTitles).map((element, index) => {
                                        return (
                                            <Box key={index} className="mt-1">
                                                <Heading fontSize='md' className='my-2'>{element[1]}</Heading>
                                                <Box className='sub-details'>
                                                    {
                                                        (Object.entries(projectDesc)[index] === undefined)
                                                            ?
                                                            null
                                                            :
                                                            Object.entries(projectDesc)[index][1].split(',').map((element, index) => {
                                                                return <li key={index}>{element}</li>
                                                            })
                                                    }
                                                </Box>
                                            </Box>
                                        )
                                    })
                                }
                            </Box>
                        }
                        {
                            !checkWork &&
                            <Box id='experience-area'>
                                <Heading fontSize='2xl' className='mt-4'>Work Experience</Heading>
                                {
                                    Object.entries(workTitles).map((element, index) => {
                                        return (
                                            <Box key={index} className="mt-1">
                                                <Heading fontSize='md' className='my-2'>{element[1]}</Heading>
                                                <Box className='sub-details'>
                                                    {
                                                        (Object.entries(workDesc)[index] === undefined)
                                                            ?
                                                            null
                                                            :
                                                            Object.entries(workDesc)[index][1].split(',').map((element, index) => {
                                                                return <li key={index}>{element}</li>
                                                            })
                                                    }
                                                </Box>
                                            </Box>
                                        )
                                    })
                                }
                            </Box>
                        }
                        {
                            !checkAward &&
                            <Box id='award-area'>
                                <Heading fontSize='2xl' className='mt-4'>Awards & Achievement</Heading>
                                <Box className='mt-1'>
                                    {
                                        awards.split(',').map((element, index) => {
                                            return <li key={index}>{element}</li>
                                        })
                                    }
                                </Box>
                            </Box>
                        }

                    </section>
                </section>
            </Box>
        </Box>
    )
}

export default Theme2