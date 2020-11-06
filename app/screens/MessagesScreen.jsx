import React, {useState} from 'react';
import { FlatList } from 'react-native';




import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListSeperatorComponent from '../components/ListSeperatorComponent';
import Screen from '../components/Screen';
const initialMessages = [
        {
            id:1,
            title:"T1",
            description:"D1",
            image:require('../assets/mosh.jpg')
        },
        {
            id:2,
            title:"T2",
            description:"D2",
            image:require('../assets/mosh.jpg')
        
        },
        {
        id:3,
        title:"T3",
        description:"D3",
        image:require('../assets/mosh.jpg')
        
        },
        ]

function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages);
    const [refresh, setrefresh] = useState(false)


    const handleDelete = (message) => {
        // Delete Message
        const newMessages = messages.filter(m=> m.id !==message.id)
        setMessages(newMessages)
    
    }
    return (
        <Screen>
            <FlatList 
                data={messages}
                keyExtractor={message=> message.id.toString()}
                renderItem={({item})  => 
                <ListItem
                    title={item.title} 
                    subTitle={item.description} 
                    image={item.image}
                    onPress={()=>console.log('selected msg',item)}
                    renderRightActions={() => <ListItemDeleteAction onPress={()=> handleDelete(item) } />}
                    />  
            }
            ItemSeparatorComponent={ListSeperatorComponent}
            refreshing={refresh}
            onRefresh={()=>{
                setMessages([
                    {
                        id:3,
                        title:"T3",
                        description:"D3",
                        image:require('../assets/mosh.jpg')
                        
                        }  
                ])
            }}
        />
        </Screen>
       
    );
}

export default MessagesScreen;