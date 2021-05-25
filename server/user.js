const users=[];

const adduser =({id,name,room})=>{
//jsmastry= jsmastry
name= name.trim().toLowerCase();
room= room.trim().toLowerCase();



const existingutse =users.find((user)=>user.room === room && user.name ===name); 
if(existingutse){
    return{error: 'username is taken'};
}
const user={id,name,room};
users.push(user);

return {user}
}

const removeuser =(id)=>{
    const index = users.findIndex((user) => user.id ===id)

    if(index !==-1){
        return users.splice(index,1)[0];
    }

}

const getuser =(id)=>users.find((user) =>  user.id === id)  ;

const getuserinroom=(room) => users.filter((user) => user.room === room);

module.exports = {adduser, removeuser,getuser,getuserinroom};