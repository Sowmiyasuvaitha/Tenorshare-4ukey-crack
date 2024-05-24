import React, { useContext } from 'react'
import { Heading, Text, Box, Badge } from '@chakra-ui/react'
import './theme1.css'
import { ImLocation } from 'react-icons/im'
import { GrMail } from 'react-icons/gr'
import { BsFillTelephoneFill } from 'react-icons/bs'
import ResumeContext from '../../Context/ResumeContext'

const Theme1 = (props) => {
    const { checkProj, checkWork, checkAward } = useContext(ResumeContext)
    const { themeData, componentRef } = props;
    const { name, profile, address, phone, email, skill } = themeData.personalData;
    const { projectTitles, projectDesc } = themeData.projectData;
    const { educationTitles, educationDesc } = themeData.educationData;
    const { workTitles, workDesc } = themeData.workData;
    const { awards } = themeData.awardData;
    return (
        <>
            <Box id="section-to-print" ref={componentRef}>
                <Box _dark={{ border: '1px solid white' }} id="theme1">
                    {/* Personal Info  */}
                    <header id='info' className='text-center mt-2'>
                        <Heading as='h2' size='2xl' className='mb-2'>
                            {name}
                        </Heading>
                        <Text fontSize='md' className='text-muted my-1 '>
                            <span className='mx-2'><ImLocation className='d-inline mx-1' />{address}</span>|
                            <span className='mx-2'><GrMail className='d-inline mx-1' />{email}</span>|
                            <span className='mx-2'><BsFillTelephoneFill className='d-inline mx-1' />{phone}</span>
                        </Text>
                        <Heading as='h3' size='md' className='mt-1 mb-2'>
                            {profile}
                        </Heading>
                    </header>
                    {/* Skills Part  */}
                    <section id="skills" className='my-2'>
                        <Heading _dark={{ color: 'gray.800' }} bg={'#D2E4E1'} as='h3' size='md' px={20} py={2}>
                            TECHNICAL SKILLS
                        </Heading>

                        <Box id='skills-set' className='basic-set d-flex justify-content-center align-items-center'>
                            <Box className='skillBox'>
                                {
                                    skill.split(',').map((element, index) => <Badge key={index} className='skill-badge' variant='solid'>{element}</Badge>)
                                }
                            </Box>
                        </Box>
                    </section>

                    {/* Project Section  */}
                    {
                        !checkProj &&
                        <section id="projects" className='my-2'>
                            <Heading _dark={{ color: 'gray.800' }} bg={'#D2E4E1'} as='h3' size='md' px={20} py={2}>
                                PROJECTS
                            </Heading>

                            <Box id='project-set' className='basic-set'>
                                {
                                    Object.entries(projectTitles).map((element, index) => {
                                        return (
                                            <Box key={index} className="subBox">
                                                <Text className='sub-title'>{element[1]}</Text>
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
                        </section>
                    }

                    {/* Education Part  */}

                    <section id="education" className='my-2'>
                        <Heading _dark={{ color: 'gray.800' }} bg={'#D2E4E1'} as='h3' size='md' px={20} py={2}>
                            EDUCATION
                        </Heading>

                        <Box id='education-set' className='basic-set'>
                            {
                                Object.entries(educationTitles).map((element, index) => {
                                    return (
                                        <Box key={index} className="subBox">
                                            <Text className='sub-title'>{element[1]}</Text>
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
                    </section>

                    {/* WORK EXPERIENCE  */}
                    {
                        !checkWork &&
                        <section id="experience" className='my-2'>
                            <Heading _dark={{ color: 'gray.800' }} bg={'#D2E4E1'} as='h3' size='md' px={20} py={2}>
                                WORK EXPERIENCE
                            </Heading>

                            <Box id='experience-set' className='basic-set'>
                                {
                                    Object.entries(workTitles).map((element, index) => {
                                        return (
                                            <Box key={index} className="subBox">
                                                <Text className='sub-title'>{element[1]}</Text>
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
                        </section>
                    }
                    {/* Award & Achievement */}
                    {
                        !checkAward &&
                        <section id="awards" className='my-2'>
                            <Heading _dark={{ color: 'gray.800' }} bg={'#D2E4E1'} as='h3' size='md' px={20} py={2}>
                                AWARDS & ACHIEVEMENTS
                            </Heading>

                            <Box id='award-set' className='basic-set d-flex justify-content-between align-items-center'>
                                <Box>
                                    {
                                        awards.split(',').map((element, index) => {
                                            return <li key={index}>{element}</li>
                                        })
                                    }
                                </Box>
                            </Box>
                        </section>
                    }
                </Box>
            </Box>
        </>
    )
}

export default Theme1
