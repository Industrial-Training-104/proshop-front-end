import React from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

function Categories() {
  return (
    <>
      <Container className="mb-4 px-0 d-flex justify-content-start flex-wrap">
        <Button className="m-2" variant="dark" size="lg">
          Electronics
        </Button>{' '}
        <Button className="m-2" variant="dark" size="lg">
          TV
        </Button>{' '}
        <Button className="m-2" variant="dark" size="lg">
          Headsets
        </Button>{' '}
        <Button className="m-2" variant="dark" size="lg">
          Appliances
        </Button>{' '}
        <Button className="m-2" variant="dark" size="lg">
          Children Toys
        </Button>{' '}
        <Button className="m-2" variant="dark" size="lg">
          Healthcare
        </Button>{' '}
        <Button className="m-2" variant="dark" size="lg">
          Accessories
        </Button>{' '}
        <Button className="m-2" variant="dark" size="lg">
          Gadgets
        </Button>{' '}
        <Button className="m-2" variant="dark" size="lg">
          Daily needs
        </Button>{' '}
        <Button className="m-2" variant="dark" size="lg">
          Office Products
        </Button>{' '}
        <Button className="m-2" variant="dark" size="lg">
          SmartPhones
        </Button>{' '}
        <Button className="m-2" variant="dark" size="lg">
          Laptops
        </Button>
      </Container>
    </>
  )
}

export default Categories
