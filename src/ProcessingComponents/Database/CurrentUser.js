import { useState } from 'react';
import ColoredLine from '../../StyleCompenents/ColoredLine';

async function CurrentUser() {

    let result = await fetch(
        'http://localhost:5000/currentUser', {
            method: "get",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        // console.warn(result.username);
        if (result) {
            return result;
        }

}

export default CurrentUser;