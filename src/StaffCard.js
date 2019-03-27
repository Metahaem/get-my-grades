import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const StaffCard = ({image, name, job, description}) => (
  <Card>
    <Image src={image} alt={name}/>
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>{job}</Card.Meta>
      <Card.Description>{description}</Card.Description>
    </Card.Content>
  </Card>
)

export default StaffCard