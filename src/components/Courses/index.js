import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {CourseContainer, CourseBg, ImageBg, CourseH1, CourseWrapper, CourseCard, CourseImg, CourseInfo, CourseIcons, Icon1, Icon2, Icon3, Icon4, CourseP, P, CourseBtnWrapper} from './CoursesComponents'
import Tkt from '../../images/Tkt1.png'
import PKI from '../../images/PKI.png'
import Linguaskill from '../../images/linguaskill.png'
import IELTS from '../../images/IELTS.png'
import Bg from '../../images/background1.png'
import { Button } from '../ButtonElement'

const Course = () => {

    const [courses, setCourses] = useState([
   //     {populate: '*',}
    ])

    useEffect(() => {
        axios.get('http://localhost:1337/api/courses?populate=*').then(rest => {
            console.log(rest.data);
            setCourses(rest.data.data)
        }).catch(error => {
            console.log(error);
        })
    }, [])

  return (
    <CourseContainer id="курсы">
        <CourseBg><ImageBg src={Bg}/></CourseBg>
        <CourseH1>Наши курсы</CourseH1>
        <CourseWrapper>
            {courses?.map(course => (
                <CourseCard key={course.id}>
                    <CourseImg src={`http://localhost:1337${course.attributes.image.data?.[0]?.attributes.url}`} />
                    <CourseInfo>
                        <CourseIcons><Icon1  /><Icon2 /><Icon3  /></CourseIcons>
                        <CourseP><P>{course.attributes.duration}</P>
                        <P>{course.attributes.description1}</P>
                        <P>{course.attributes.description2}</P></CourseP> 
                    </CourseInfo>
                    <Button to='signup'>Подробнее</Button>
                </CourseCard>
            ))}
        </CourseWrapper>
    </CourseContainer>
  )
}

export default Course