import React from 'react'
import StaffCard from './StaffCard';

const staff = [
    {
        name: 'Jenn Linning',
        job: `Head of English`,
        description: `Jenn (MA, PGCE, CELTA) has a Master's degree in English Language and gained a PGCE (with distinction) on the Teach First Programme. Jenn specialises in English as an Additional Language and is CELTA qualified.`,
        image: `https://i2.wp.com/www.getmygrades.co.uk/wp-content/uploads/2018/07/Jenn.jpg?resize=300%2C300&ssl=1`
    },
    {
        name: 'Ravi Pradhan',
        job: `Front-End Developer`,
        description: `Ravi has a passion for web development and enjoys having the responsibility for the creation and maintenance of the Get My Grades user interfaces.`,
        image: `https://i0.wp.com/www.getmygrades.co.uk/wp-content/uploads/2017/03/ravi.png?resize=300%2C300&ssl=1`
    },
    {
        name: 'Arthur Nichols',
        job: `'Big Boss'`,
        description: `Arthur is our ‘Big Boss’. He oversees the work of all the team, making the important executive decisions that nobody else wants to make, like, who needs more biscuits, or, can we spin in the spinny-chairs?`,
        image: `https://i2.wp.com/www.getmygrades.co.uk/wp-content/uploads/2017/03/ArthursFirstBirthdayPart1-7-of-12_PES_20170929-2.jpg?resize=300%2C300&ssl=1`
    },
    {
        name: 'John Nichols',
        job: `Head of Education/Co-Founder`,
        description: `John (BSc, PGCE, MTA) earned a PGCE with Distinction on the Teach First Programme as a science teacher. He has thousands of hours of private tuition experience and wants to change the education world!`,
        image: `https://i1.wp.com/www.getmygrades.co.uk/wp-content/uploads/2018/07/John-Photo-Jan19.jpg?resize=300%2C300&ssl=1`
    },
    {
        name: 'Bryden Commons',
        job: `Head of SEN and Inclusion`,
        description: `Bryden (BBSc) has a degree in Behavioural Science and is trained in Applied Behavioural Analysis. She is passionate about creating accessible education for young people with special educational needs or mental illness.`,
        image: `https://i1.wp.com/www.getmygrades.co.uk/wp-content/uploads/2017/03/StaffPhoto-1-of-6-1.jpg?resize=300%2C300&ssl=1`    
    },
    {
        name: 'Samantha Nichols',
        job: `Managing Director/Co-Founder`,
        description: `Sam (BSc) spent much of her early career working as a personal assistant, sales and finance executive, and operations manager. She brings her many administrative talents and skills to help everything run smoothly.`,
        image: `https://i1.wp.com/www.getmygrades.co.uk/wp-content/uploads/2018/07/Sam-Photo-Jan19.jpg?resize=300%2C300&ssl=1`
    }
    
]

const People = () => {
       
    return (
        <div>
        <br/><br/><br/><br/>
        <div style={{top: `100px`, left: `150px`}}className="ui grid container">
            {staff.map(person => {
                return <StaffCard 
                    key={person.name} 
                    name={person.name} 
                    job={person.job} 
                    description={person.description} 
                    image={person.image}
                />
            })}
        </div>
        </div>
    )

}

export default People





