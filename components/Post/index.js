import React from 'react'
import { Link } from '../../routes'
import Wrapper from './Wrapper'

const PostItem = ({ post }) => (
  <Wrapper>
    <Link route='post' params={{ slug: post._path_part }}>
      <a>
        <h3>{post.title}</h3>
      </a>
    </Link>
  </Wrapper>
)

export default PostItem
