import React from 'react';
import s from '../FriendLit.module.css';

function FriendListItem({ id, name, avatar, isOnline }) {
  return (
    <li className={s.item} key={id}>
      <span className={isOnline ? s.online : s.offline}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

export default FriendListItem;
