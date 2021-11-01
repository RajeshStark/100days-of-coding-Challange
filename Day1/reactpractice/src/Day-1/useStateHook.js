import React, { useState } from 'react'

export default function UseStateHook() {

    //Here We Defining use states without updating function
    const myStringstate = useState('initial My string');

    //now we are created updating function for myStringstate
    const myStringUpdate = myStringstate[1];

    //Updating myStringstate with onClick
    function myfunction() {
        myStringUpdate('Rajesh')
        console.log("This is a working button");
    }


    // so this is the way we can use hooks but recommended way to use useState is using array destruction method

    // where you create state and setState method in array destruction and uses it 

    // for set state
    // ex: const [state, setState] = useState()

    //
    const [message, setMessage] = useState({ message: 'No Msg' })
    const [chat, setChat] = useState({ chat: 'No Msg', chatFrom: 'None' });

    //Updating messageObject with onClick
    function mymsgfunction() {
        const newMessage = { message: 'Got A Message' };
        setMessage(newMessage)
        //    setMessage({message: 'Got A Message'}) // this also works coz both are same
    }

// Updating usestate only single object
    function updateMsgOnly() {
        const val = "Updated Msg it's done";

        //Important
        setChat(prevState => {
            return { ...prevState, chat: val }
        })
    }

    function updateBoth() {
        const val = "Thinnavara";
        const from = "Srujana";
        setChat({chat: val, chatFrom: from})
    }

    return (
        <div>
            <p>{myStringstate}</p>
            <p>{message.message}</p>
            <p>{`The message is ${chat.chat} from ${chat.chatFrom}`}</p>
            <button onClick={myfunction}>button</button>
            <button onClick={mymsgfunction}>upadateMessage</button>
            <button onClick={updateMsgOnly}>upadateMessageOnly</button>
            <button onClick={updateBoth}>upadateMessageAndName</button>
        </div>
    )
}
