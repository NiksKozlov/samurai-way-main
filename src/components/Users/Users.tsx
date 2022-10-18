import React from 'react';
import {UsersPropsType} from './UsersContainer';
import s from './Users.module.css'


export const Users: React.FC<UsersPropsType> = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                avatarUrl: 'https://previews.123rf.com/images/studiostoks/studiostoks1708/studiostoks170800065/84219841-nice-man-with-a-glass-of-champagne-sparkling-wine-round-avatar-icon-symbol-character-image-pop-art-r.jpg',
                followed: false,
                fullName: 'Nikita',
                status: 'I am a programmer',
                location: {city: 'Brest', country: 'Belarus'}
            },
            {
                id: 2,
                avatarUrl: 'https://previews.123rf.com/images/studiostoks/studiostoks1708/studiostoks170800065/84219841-nice-man-with-a-glass-of-champagne-sparkling-wine-round-avatar-icon-symbol-character-image-pop-art-r.jpg',
                followed: true,
                fullName: 'Viktor',
                status: 'I am a translator',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
            {
                id: 3,
                avatarUrl: 'https://previews.123rf.com/images/studiostoks/studiostoks1708/studiostoks170800065/84219841-nice-man-with-a-glass-of-champagne-sparkling-wine-round-avatar-icon-symbol-character-image-pop-art-r.jpg',
                followed: false,
                fullName: 'Pavel',
                status: 'I am a director of pizzeria',
                location: {city: 'Moscow', country: 'Russia'}
            }
        ])
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.avatarUrl} className={s.userAvatar} />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                                : <button onClick={() => props.follow(u.id)}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                           <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}