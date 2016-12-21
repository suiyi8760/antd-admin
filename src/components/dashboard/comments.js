import React, {PropTypes} from 'react'
import {Icon,Table,Tag} from 'antd'
import styles from './comments.less'
import {classnames,color} from '../../utils'


const status = {
  1:{
    color:color.green,
    text:'APPROVED'
  },
  2:{
    color:color.yellow,
    text:'PENDING'
  },
  3:{
    color:color.red,
    text:'REJECTED'
  },
}

function Comments(props) {
  const columns = [
    {
      title: 'avatar',
      dataIndex: 'avatar',
      width:48,
      className:'avatarcolumn',
      render: text => <span style={{backgroundImage:`url(${text})`}} className={styles.avatar} ></span>,
    }, {
      title: 'content',
      dataIndex: 'content',
      render:(text,it) => <div>
        <h5 className={styles.name}>{it.name}</h5>
        <p className={styles.content}>{it.content}</p>
        <p className={styles.daterow}>
          <Tag color={status[it.status].color}>{status[it.status].text}</Tag>
          <span className={styles.date}>{it.date}</span>
        </p>
      </div>,
    },
  ]
  console.log(props);
  return (
    <div className={styles.comments}>
      <Table pagination={false} showHeader={false} columns={columns} key={(record,key)=>key} dataSource={props.data.filter((item,key) => key<3)}/>
    </div>
  )
}

export default Comments
