import React, { useContext, } from "react"
import axios from "axios"
import { Form, } from "semantic-ui-react"
import {useFormInput, } from "../hooks/useFormInput"
import { AuthContext, } from "../providers/AuthProvider"


const PostForm = (props) => {
  const title = useFormInput("")
  const body = useFormInput("")
  const {user, } = useContext(AuthContext)


const handleSubmit = (e) => {
  e.preventDefault()
  axios.post(`/api/user/${user.id}/posts`, {title: title.value, body: body.value, })
  .then( res => {
    props.add(res.data)
    props.toggleForm()
  })
}

return (
  <>
   <Form onSubmit={handleSubmit}>
   <Form.Group widths="equal">
   <Form.Input
     label="Title"
     placeholder="Title"
     name="title"
     required
     { ...title }
   />
   <Form.Input
     label="Body"
     placeholder="Body"
     name="body"
     required
     { ...body }
   />
 </Form.Group>
 <Form.Button>Submit</Form.Button>
</Form>
</>
)
}

export default PostForm